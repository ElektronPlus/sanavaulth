import "styles/globals.css";
import { Inter } from "@next/font/google";
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";
import Header from "components/Header";
import LandingContent from "components/LandingContent";
import Footer from "components/Footer";

const inter = Inter();

function App({ Component, pageProps }: AppProps) {
    return (
        <>
        <Header />
        <LandingContent />
        <Footer />
        <div className={`bg-zinc-900 text-white ${inter.className}`}>
            <Component {...pageProps} />
        </div>
        </>
    );  
}
export default appWithTranslation(App);