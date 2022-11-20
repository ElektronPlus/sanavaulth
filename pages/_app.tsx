import "styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import client from "lib/apollo-client";

const inter = Inter();

function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <div className={`bg-zinc-900 text-white ${inter.className}`}>
                <Component {...pageProps} />
            </div>
        </ApolloProvider>
    )
}

export default appWithTranslation(App);