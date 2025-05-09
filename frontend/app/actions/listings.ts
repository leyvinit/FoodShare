"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createListing(formData: FormData) {
  const supabase = createServerSupabaseClient()

  // Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return { error: "You must be logged in to create a listing" }
  }

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const categoryId = formData.get("categoryId") as string
  const quantity = formData.get("quantity") as string
  const location = formData.get("location") as string
  const latitude = formData.get("latitude") ? Number.parseFloat(formData.get("latitude") as string) : null
  const longitude = formData.get("longitude") ? Number.parseFloat(formData.get("longitude") as string) : null
  const availableUntil = formData.get("availableUntil") as string
  const dietaryInfo = formData.getAll("dietaryInfo") as string[]
  const images = formData.getAll("images") as string[]

  try {
    // Create the food listing
    const { data: listing, error: listingError } = await supabase
      .from("food_listings")
      .insert({
        user_id: user.id,
        title,
        description,
        category_id: categoryId,
        quantity: quantity as any,
        location,
        latitude,
        longitude,
        available_until: availableUntil,
        dietary_info: dietaryInfo.length > 0 ? dietaryInfo : null,
      })
      .select()
      .single()

    if (listingError) {
      throw listingError
    }

    // If there are images, add them to the listing_images table
    if (images.length > 0) {
      const imagesToInsert = images.map((image) => ({
        listing_id: listing.id,
        storage_path: image,
      }))

      const { error: imagesError } = await supabase.from("listing_images").insert(imagesToInsert)

      if (imagesError) {
        throw imagesError
      }
    }

    revalidatePath("/browse")
    return { success: true, data: listing }
  } catch (error: any) {
    return { error: error.message }
  }
}
