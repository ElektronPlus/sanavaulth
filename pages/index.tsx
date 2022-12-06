import { SupportForm } from "../features/support-form/components/SupportForm";
import Header from "components/Header";
import LandingContent from "components/LandingContent";
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
