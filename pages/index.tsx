import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from "features/landing-page/Navbar";
import Main from "features/landing-page/Main";
import Footer from "features/landing-page/Footer";

export default function HomePage(): JSX.Element {
    return (
        <>
            <Head>
                    <title>sanavaulth</title>
            </Head>
            <div className="mx-auto w-full max-w-[1200px] flex justify-center align-center self-center flex-col border-solid h-full max-h-max selection:bg-[#2a3046]/50 selection:text-white">
                
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