import Liked from "./Liked";
import { Navbar } from "features/user-panel/Navbar";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function vaultLiked() {
    return (
    <>
        <Head>
            <title>SanaVaulth</title>
        </Head>
        <div className="flex
        flex-col
        h-full
        
        sm:flex-row
        sm:justify-center
        sm:items-center">
            <Navbar />
            <Liked />
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