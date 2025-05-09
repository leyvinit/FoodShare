import { createServerSupabaseClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const query = searchParams.get("query")
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  const distance = searchParams.get("distance")

  const supabase = createServerSupabaseClient()

  let listingsQuery = supabase
    .from("food_listings")
    .select(`
      *,
      categories(*),
      profiles!inner(*),
      listing_images(*)
    `)
    .eq("status", "available")
    .gt("available_until", new Date().toISOString())

  // Apply filters if provided
  if (category && category !== "all") {
    listingsQuery = listingsQuery.eq("categories.name", category)
  }

  if (query) {
    listingsQuery = listingsQuery.or(`title.ilike.%${query}%,description.ilike.%${query}%`)
  }

  // If we have location data, we could calculate distance
  // This is a simplified version - in a real app you'd use PostGIS or similar
  if (lat && lng && distance && distance !== "all") {
    // This is a very rough approximation
    const maxDistance = Number.parseFloat(distance)
    const latRange = maxDistance / 111.0 // 1 degree lat is approx 111 km
    const lngRange = maxDistance / (111.0 * Math.cos((Number.parseFloat(lat) * Math.PI) / 180))

    listingsQuery = listingsQuery
      .gte("latitude", Number.parseFloat(lat) - latRange)
      .lte("latitude", Number.parseFloat(lat) + latRange)
      .gte("longitude", Number.parseFloat(lng) - lngRange)
      .lte("longitude", Number.parseFloat(lng) + lngRange)
  }

  const { data, error } = await listingsQuery

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const supabase = createServerSupabaseClient()

  // Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()

    // Create the food listing
    const { data: listing, error: listingError } = await supabase
      .from("food_listings")
      .insert({
        user_id: user.id,
        title: body.title,
        description: body.description,
        category_id: body.category_id,
        quantity: body.quantity,
        location: body.location,
        latitude: body.latitude,
        longitude: body.longitude,
        available_until: body.available_until,
        dietary_info: body.dietary_info,
      })
      .select()
      .single()

    if (listingError) {
      throw listingError
    }

    // If there are images, add them to the listing_images table
    if (body.images && body.images.length > 0) {
      const imagesToInsert = body.images.map((image: string) => ({
        listing_id: listing.id,
        storage_path: image,
      }))

      const { error: imagesError } = await supabase.from("listing_images").insert(imagesToInsert)

      if (imagesError) {
        throw imagesError
      }
    }

    return NextResponse.json(listing)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
