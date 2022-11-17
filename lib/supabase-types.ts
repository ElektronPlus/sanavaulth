export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      message: {
        Row: {
          id: number
          content: string | null
          email: string | null
          name: string | null
          surname: string | null
        }
        Insert: {
          id?: number
          content?: string | null
          email?: string | null
          name?: string | null
          surname?: string | null
        }
        Update: {
          id?: number
          content?: string | null
          email?: string | null
          name?: string | null
          surname?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}