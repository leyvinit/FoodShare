import { createServerSupabaseClient } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
