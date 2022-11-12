import "styles/globals.css";
import { ReactNode } from "react";
import { Inter } from "@next/font/google";
import type { AppProps } from 'next/app';

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`bg-zinc-900 text-white ${inter.className}`}>
            {/* @ts-ignore */}
            <Component {...pageProps} />
        </div>
    )
}