import { createServerSupabaseClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const supabase = createServerSupabaseClient()

  try {
    const body = await request.json()
    const { userId, firstName, lastName, role, avatarUrl, location } = body

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    console.log("Creating profile for user:", userId)

    // Check if profile already exists
    const { data: existingProfile, error: checkError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single()

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Error checking profile:", checkError)
      return NextResponse.json({ error: checkError.message }, { status: 500 })
    }

    if (existingProfile) {
      return NextResponse.json({ message: "Profile already exists", profile: existingProfile })
    }

    // Create profile with explicit SQL to bypass RLS
    // This is a more direct approach that can help bypass RLS issues
    const { data, error } = await supabase.rpc("create_profile", {
      user_id: userId,
      first_name: firstName || "",
      last_name: lastName || "",
      user_role: role || "individual",
      avatar: avatarUrl || null,
      user_location: location || null,
    })

    if (error) {
      console.error("Error creating profile:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, profile: data })
  } catch (error: any) {
    console.error("Profile creation error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const supabase = createServerSupabaseClient()
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 })
  }

  try {
    // Get profile
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (error && error.code !== "PGRST116") {
      // PGRST116 is "no rows returned" error
      console.error("Error fetching profile:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data || null)
  } catch (error: any) {
    console.error("Profile fetch error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
