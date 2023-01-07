import { AuthForm } from "features/auth/AuthForm"
import { useState } from "react"
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const Navbar = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false)
    const { t } = useTranslation("common");

    return (
        <nav
        className="flex 
        items-center 
        justify-between 
        flex-row 
        w-full 
        max-w-[1200px] 
        h-[60px] 
        border-b-[0.5px] 
        border-white/30 
        backdrop-blur-[10px] 
        fixed top-0 z-[222]
        font-sans
        
        max-xl:max-w-[850px]
        
        max-lg:max-w-[700px]
        
        max-md:max-w-[90vw]
        
        max-sm:max-w-[100vw]
        max-sm:pl-[20px]
        max-sm:pr-[20px]">
            <div
                className="cursor-pointer 
            text-xl 
            font-bold
            tracking-widest"><Link href="/vault"> {t('projectName')} </Link></div>
            <ul
                className="flex 
            items-center 
            justify-center 
            flex-row 
            gap-24
            cursor-pointer
            
            max-[610px]:hidden">
                <li className="cursor-pointer"><Link href="#">{t("contact")}</Link></li>
                <li className="cursor-pointer"><Link href="#">{t("team")}</Link></li>
            </ul>
            {
                openLogin
                    ? <>
                        <AuthForm />
                        <button onClick={() => setOpenLogin(false)}>X</button>
                    </>
                    : <div>
                        <button
                            className="w-[150px] 
                            h-10 
                            rounded-full 
                            bg-gradient-to-tr 
                            from-sanahPurple
                            to-sanahBlue
                            font-semibold 
                            tracking-
                            text-sm
                            hover:shadow-[0_0_20px_0_rgba(116,18,240,0.4)] 
                            duration-300"
                            onClick={() => setOpenLogin(true)}
                        >{t('login')}</button>
                    </div>
            }
        </nav>
    )
}