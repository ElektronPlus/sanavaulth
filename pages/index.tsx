import { SupportForm } from "../features/support-form/components/SupportForm";
import Header from "components/Header";
import LandingContent from "components/LandingContent";
import Footer from "components/Footer";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function HomePage() {
    return (
        <>
            <Head>
                    <title>sanavaulth</title>
            </Head>
            <Header />
            <LandingContent />
            <Footer />
            <SupportForm />
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