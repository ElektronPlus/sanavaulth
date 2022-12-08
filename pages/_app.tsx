import "styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import client from "lib/apollo-client";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from "react";

const inter = Inter();

function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())
    
    return (
        <ApolloProvider client={client}>
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <div className={`bg-zinc-900 text-white ${inter.className}`}>
                    <Component {...pageProps} />
                </div>
            </SessionContextProvider>
        </ApolloProvider>
    )
}

export default appWithTranslation(App);