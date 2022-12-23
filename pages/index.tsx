import { SupportForm } from "../features/support-form/components/SupportForm";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthForm } from "features/auth/AuthForm";
import Navbar from "features/landing-page/Navbar";
import Main from "features/landing-page/Main";
import Footer from "features/landing-page/Footer";
import { ClassNames } from "@emotion/react";

export default function HomePage(): JSX.Element {
    return (
        <>
            <Head>
                    <title>sanavaulth</title>
            </Head>
            <div 
            className="mx-auto 
            w-full 
            max-w-[1200px] 
            flex 
            justify-center 
            align-center 
            self-center 
            flex-col 
            border-solid 
            h-full 
            max-h-max 
            selection:bg-[#2a3046]/50 
            selection:text-white
            
            max-[1199px]:max-w-[850px]
            
            max-[900px]:max-w-[700px]
            
            max-[768px]:max-w-[90vw]
            
            max-[600px]:overflow-x-hidden
            max-[600px]:max-w-[100vw]">
                
                <Navbar />
                <Main />
                <Footer />
            
            </div>
            
        </>
    )
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common'])
        }
    }
}