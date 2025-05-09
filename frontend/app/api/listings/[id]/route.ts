import { createServerSupabaseClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("food_listings")
    .select(`
      *,
      categories(*),
      profiles!inner(*),
      listing_images(*)
    `)
    .eq("id", id)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!data) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 })
  }

  return NextResponse.json(data)
}
