import { Auth, ThemeSupa,  } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from "lib/database.types";
import { useTranslation } from "next-i18next";
import { useEffect } from 'react';

export function AuthForm() {
    const { t } = useTranslation('common')
    const supabaseClient = useSupabaseClient<Database>()

    useEffect(() => {
        const targetNode = document.getElementsByClassName("MAGIC_LINK_CONTAINER")[0];
        const config = { attributes: true, childList: true, subtree: true };
    
        const callback = function (mutationList: any) {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                const message =
                    document.getElementsByClassName("MAGIC_LINK_MESSAGE")[0];
                if (message?.innerHTML == "unsupported_otp_type")
                    message.innerHTML = t('loginForm.noEmail');
                else if (message?.innerHTML == "Check your email for the magic link")
                    message.innerHTML = t('loginForm.emailSended');
                else if (message?.innerHTML == "For security purposes, you can only request this once every 60 seconds")
                    message.innerHTML = t('loginForm.cooldown');
            }
        }
        };
    
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    });
    return (
        <div className='w-96 px-3 border-solid border-[#3fcf8e] border-2 rounded-lg drop-shadow-lg'>
            <h1 className='text-center mt-4 text-xl'>{t('loginForm.title')}</h1>
            <Auth 
                view='magic_link'
                showLinks={false}
                supabaseClient={supabaseClient}
                localization={{
                    variables: {
                        magic_link: {
                            email_input_label: t('loginForm.emailInptLabel'),
                            email_input_placeholder: t('loginForm.emailInputPlaceholder'),
                            button_label: t('loginForm.button')
                        },

                    }
                }}
                appearance={{
                    theme: ThemeSupa,
                    className: {
                        container: "MAGIC_LINK_CONTAINER",
                        message: "MAGIC_LINK_MESSAGE",
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
        </div>
    )
}