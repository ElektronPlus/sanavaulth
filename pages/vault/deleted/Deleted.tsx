import File from "pages/vault/File"
import { useTranslation } from "next-i18next"

export default function Deleted() {
    const { t } = useTranslation("common");

    return (
        <>
            <div className="flex
            flex-col
            items-center
            justify-center
            w-full
            sm:h-100vh
            gap-10">

                <h1 className="text-2xl
                text-center
                mt-[2vh]
                
                sm:text-4xl"><span className="font-bold
                            bg-gradient-to-bl
                            from-[#7458F0] 
                            to-[#002e82] 
                            bg-clip-text
                            text-transparent">{t('userPanel.userName')}</span>{t('userPanel.deleted')}</h1>

                <div className="flex
                flex-row
                flex-wrap
                content-start
                bg-gray-100/10
                rounded-3xl
                h-[60vh]
                w-[80vw]
                px-5
                py-5
                gap-12
                overflow-y-auto
                

                sm:px-5
                sm:h-[70vh]
                sm:w-[70vw]">
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                </div>
            </div>
        </>
    )
}