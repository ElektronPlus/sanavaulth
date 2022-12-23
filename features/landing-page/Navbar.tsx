import { AuthForm } from "features/auth/AuthForm"
import { useState } from "react"
import { useTranslation } from "next-i18next";

export default function Navbar() {
    const [openLogin, setOpenLogin] = useState<Boolean>(false)
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
        
        max-[1199px]:max-w-[850px]
        
        max-[900px]:max-w-[700px]
        
        max-[768px]:max-w-[90vw]
        
        max-[600px]:max-w-[100vw]
        max-[600px]:pl-[20px]
        max-[600px]:pr-[20px]">
            <div
                className="cursor-pointer 
            text-[20px] 
            font-bold
            tracking-widest">{t('projectName')}</div>
            <ul
                className="flex 
            items-center 
            justify-center 
            flex-row 
            gap-[100px] 
            cursor-pointer
            
            max-[610px]:hidden">
                <li className="cursor-pointer">{t("contact")}</li>
                <li className="cursor-pointer">{t("team")}</li>
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
                            h-[40px] 
                            rounded-full 
                            bg-gradient-to-tr 
                            from-sanahPurple
                            to-sanahBlue
                            font-semibold 
                            tracking-[2px]
                            text-[14px]
                            hover:shadow-[0_0_20px_0_rgba(116,18,240,0.4)] 
                            duration-300"
                            onClick={() => setOpenLogin(true)}
                        >{t('login')}</button>
                    </div>
            }
        </nav>
    )
}