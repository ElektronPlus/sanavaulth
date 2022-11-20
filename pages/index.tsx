import { SupportForm } from "../features/support-form/components/SupportForm";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthForm } from "features/auth/AuthForm";

export default function HomePage() {
    return (
        <>
            <Head>
                    <title>sanavaulth</title>
            </Head>
            <AuthForm />
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