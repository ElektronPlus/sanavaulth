import "styles/globals.css";
import { ReactNode } from "react";
import { Inter } from "@next/font/google";
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";

const inter = Inter();

function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`bg-zinc-900 text-white ${inter.className}`}>
            <Component {...pageProps} />
        </div>
    )
}

export default appWithTranslation(App);