"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function sendMessage(formData: FormData) {
  const supabase = createServerSupabaseClient()

  // Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return { error: "You must be logged in to send messages" }
  }

  const requestId = formData.get("requestId") as string
  const content = formData.get("content") as string

  if (!requestId || !content) {
    return { error: "Missing required fields" }
  }

  try {
    // Check if the user is part of this conversation
    const { data: request, error: requestError } = await supabase
      .from("requests")
      .select(`
        id,
        requester_id,
        food_listings!inner(user_id)
      `)
      .eq("id", requestId)
      .single()

    if (requestError) {
      throw requestError
    }

    // Verify the user is either the requester or the listing owner
    if (request.requester_id !== user.id && request.food_listings.user_id !== user.id) {
      return { error: "You are not authorized to send messages in this conversation" }
    }

    // Create the message
    const { data, error } = await supabase
      .from("messages")
      .insert({
        request_id: requestId,
        sender_id: user.id,
        content,
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    revalidatePath(`/messages/${requestId}`)
    return { success: true, data }
  } catch (error: any) {
    return { error: error.message }
  }
}
