"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createRequest(formData: FormData) {
  const supabase = createServerSupabaseClient()

  // Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return { error: "You must be logged in to request food" }
  }

  const listingId = formData.get("listingId") as string
  const message = formData.get("message") as string

  if (!listingId || !message) {
    return { error: "Missing required fields" }
  }

  try {
    // Check if the user already has a request for this listing
    const { data: existingRequest } = await supabase
      .from("requests")
      .select("id")
      .eq("listing_id", listingId)
      .eq("requester_id", user.id)
      .single()

    if (existingRequest) {
      return { error: "You have already requested this food" }
    }

    // Create the request
    const { data, error } = await supabase
      .from("requests")
      .insert({
        listing_id: listingId,
        requester_id: user.id,
        message,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    revalidatePath(`/listing/${listingId}`)
    return { success: true, data }
  } catch (error: any) {
    return { error: error.message }
  }
}
