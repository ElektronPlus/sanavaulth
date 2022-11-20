import "styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from "react";

const inter = Inter();

function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())
    
    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <div className={`bg-zinc-900 text-white ${inter.className}`}>
                <Component {...pageProps} />
            </div>
        </SessionContextProvider>
    )
}

export default appWithTranslation(App);