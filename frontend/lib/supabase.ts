import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a singleton instance for client-side usage
let browserClient: ReturnType<typeof createClient<Database>> | undefined

// Client-side Supabase client
export function getSupabaseBrowser() {
  if (browserClient) return browserClient
  browserClient = createClient<Database>(supabaseUrl, supabaseAnonKey)
  return browserClient
}

// Server-side Supabase client with service role for admin operations
export function createServerSupabaseClient() {
  // Use the service role key to bypass RLS
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  if (!supabaseServiceKey) {
    console.error("SUPABASE_SERVICE_ROLE_KEY is not defined")
  }

  return createClient<Database>(
    supabaseUrl,
    supabaseServiceKey, // Use service role key instead of anon key
    {
      auth: {
        persistSession: false,
      },
    },
  )
}

// For backward compatibility
export const supabase = getSupabaseBrowser()
