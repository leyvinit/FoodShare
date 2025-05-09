import { createServerSupabaseClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const role = formData.get("role") as string
  const location = formData.get("location") as string

  if (!email || !password || !firstName || !lastName || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()

  try {
    // 1. Create the user in Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        first_name: firstName,
        last_name: lastName,
        role,
      },
    })

    if (authError) {
      console.error("Auth error:", authError)
      return NextResponse.json({ error: authError.message }, { status: 500 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
    }

    // 2. Create the profile using direct SQL to bypass RLS
    const { error: profileError } = await supabase.rpc("admin_create_profile", {
      p_user_id: authData.user.id,
      p_first_name: firstName,
      p_last_name: lastName,
      p_role: role,
      p_location: location,
    })

    if (profileError) {
      console.error("Profile error:", profileError)
      // Even if profile creation fails, we don't want to roll back the auth user
      // We'll just return a warning
      return NextResponse.json(
        {
          success: true,
          warning: "User created but profile setup failed. Please contact support.",
        },
        { status: 200 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
