export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string
          last_name: string
          avatar_url: string | null
          role: "individual" | "business" | "organization"
          bio: string | null
          location: string | null
          latitude: number | null
          longitude: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name: string
          last_name: string
          avatar_url?: string | null
          role?: "individual" | "business" | "organization"
          bio?: string | null
          location?: string | null
          latitude?: number | null
          longitude?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          avatar_url?: string | null
          role?: "individual" | "business" | "organization"
          bio?: string | null
          location?: string | null
          latitude?: number | null
          longitude?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      food_listings: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          category_id: string | null
          quantity: "low" | "medium" | "high"
          status: "available" | "pending" | "claimed" | "expired"
          location: string
          latitude: number | null
          longitude: number | null
          available_until: string
          dietary_info: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          category_id?: string | null
          quantity?: "low" | "medium" | "high"
          status?: "available" | "pending" | "claimed" | "expired"
          location: string
          latitude?: number | null
          longitude?: number | null
          available_until: string
          dietary_info?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          category_id?: string | null
          quantity?: "low" | "medium" | "high"
          status?: "available" | "pending" | "claimed" | "expired"
          location?: string
          latitude?: number | null
          longitude?: number | null
          available_until?: string
          dietary_info?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      listing_images: {
        Row: {
          id: string
          listing_id: string
          storage_path: string
          created_at: string
        }
        Insert: {
          id?: string
          listing_id: string
          storage_path: string
          created_at?: string
        }
        Update: {
          id?: string
          listing_id?: string
          storage_path?: string
          created_at?: string
        }
      }
      requests: {
        Row: {
          id: string
          listing_id: string
          requester_id: string
          message: string
          status: "pending" | "accepted" | "rejected" | "completed"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          listing_id: string
          requester_id: string
          message: string
          status?: "pending" | "accepted" | "rejected" | "completed"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          listing_id?: string
          requester_id?: string
          message?: string
          status?: "pending" | "accepted" | "rejected" | "completed"
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          request_id: string
          sender_id: string
          content: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          request_id: string
          sender_id: string
          content: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          request_id?: string
          sender_id?: string
          content?: string
          read?: boolean
          created_at?: string
        }
      }
    }
  }
}
