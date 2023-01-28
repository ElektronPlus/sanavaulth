import { Navbar } from "../../features/landing-page/Navbar";
import { Footer } from "features/landing-page/Footer";
import { AboutTeam } from "./AboutTeam";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
    return(
        <>
        <div className="mx-auto 
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

            max-xl:max-w-[850px]

            max-lg:max-w-[700px]

            max-md:max-w-[90vw]

            max-sm:overflow-x-hidden
            max-sm:max-w-[100vw]">
            <Navbar />
            <AboutTeam />
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
