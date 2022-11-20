import { Auth, ThemeSupa,  } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from "lib/database.types";

export function AuthForm() {
    const supabaseClient = useSupabaseClient<Database>()
    return (
        <Auth 
            view='magic_link'
            showLinks={false}
            supabaseClient={supabaseClient}
            appearance={{
                theme: ThemeSupa,
                className: {
                    container: 'w-80'
                },
                variables: {
                    default: {
                        colors: {
                            inputText: 'white'
                        }
                    }
                }
            }}
        />
    )
}