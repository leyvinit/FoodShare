"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function signUp(formData: FormData) {
  const supabase = createServerSupabaseClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const role = formData.get("role") as string
  const location = formData.get("location") as string

  try {
    // Create the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          role,
        },
      },
    })

    if (authError) {
      throw authError
    }

    if (!authData.user) {
      throw new Error("Failed to create user")
    }

    // Create the profile
    const { error: profileError } = await supabase.from("profiles").insert({
      id: authData.user.id,
      first_name: firstName,
      last_name: lastName,
      role,
      location,
    })

    if (profileError) {
      throw profileError
    }

    revalidatePath("/")
    return { success: true }
  } catch (error: any) {
    return { error: error.message }
  }
}

export async function signIn(formData: FormData) {
  const supabase = createServerSupabaseClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    revalidatePath("/")
    return { success: true }
  } catch (error: any) {
    return { error: error.message }
  }
}

export async function signOut() {
  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error
    }

    revalidatePath("/")
    return { success: true }
  } catch (error: any) {
    return { error: error.message }
  }
}
