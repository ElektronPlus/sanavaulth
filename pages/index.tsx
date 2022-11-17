import { SupportForm } from "../features/support-form/components/SupportForm";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { Props } from "@supabase/auth-ui-react/dist/esm/src/components/Auth/UserContext";

const Container = (props: Props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <h1>Signed in: {user.email}</h1>
        <button onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </button>
      </>
    )
  return props.children
}

export default async function HomePage() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <Head>
        <title>sanavaulth</title>
      </Head>
      {!session ? (
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Container supabaseClient={supabase}>
            <Auth supabaseClient={supabase} />
          </Container>
        </Auth.UserContextProvider>
      ) : (
        <p>Acc page</p>
      )}
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