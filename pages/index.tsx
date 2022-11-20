import { SupportForm } from "../features/support-form/components/SupportForm";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from "lib/database.types";

export default function HomePage() {
    const supabaseClient = useSupabaseClient<Database>()
    return (
        <>
            <Head>
                    <title>sanavaulth</title>
            </Head>
            <Auth 
                supabaseClient={supabaseClient}
                appearance={{ theme: ThemeSupa }}
                magicLink={true}
            />
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