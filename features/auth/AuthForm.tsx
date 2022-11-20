import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from "lib/database.types";

export function AuthForm() {
    const supabaseClient = useSupabaseClient<Database>()
    return (
        <div>
            <Auth 
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    className: {
                        container: 'w-80'
                    },
                    variables: {
                        default: {
                            colors: {
                                inputText: 'hsl(153 60.0% 53.0%)'
                            }
                        }
                    }
                }}
                magicLink={true}
            />
        </div>
    )
}