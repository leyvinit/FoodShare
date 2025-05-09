import { supabase } from "./supabase"
import { v4 as uuidv4 } from "uuid"

export async function uploadImage(file: File): Promise<string> {
  try {
    const fileExt = file.name.split(".").pop()
    const fileName = `${uuidv4()}.${fileExt}`
    const filePath = `listing-images/${fileName}`

    const { error } = await supabase.storage.from("food-share-images").upload(filePath, file)

    if (error) {
      throw error
    }

    const { data } = supabase.storage.from("food-share-images").getPublicUrl(filePath)

    return data.publicUrl
  } catch (error) {
    console.error("Error uploading image:", error)
    throw error
  }
}

export async function uploadMultipleImages(files: File[]): Promise<string[]> {
  const uploadPromises = files.map((file) => uploadImage(file))
  return Promise.all(uploadPromises)
}
