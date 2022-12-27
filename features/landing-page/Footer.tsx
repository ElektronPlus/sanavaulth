import GitHubIcon from '@mui/icons-material/GitHub';
import { SupportForm } from 'features/support-form/components/SupportForm';
import { useTranslation } from "next-i18next";

export default function Footer() {

    const { t } = useTranslation("common");

    return (
        <footer 
        className="w-full 
        max-w-[1200px]
        h-64 
        mt-24 
        pt-5 
        flex 
        justify-between 
        border-t-[0.5px] 
        border-white/40 
        font-sans
        flex-wrap
        relative
        
        max-md:flex-col
        max-md:items-center
        max-md:justify-even
        max-md:h-[300px]">
            <p 
            className="text-2xl 
            cursor-pointer 
            font-bold">{t('projectName')}</p>
            <ul 
            className="list-none 
            text-center 
            flex 
            flex-col 
            gap-5
            
            max-md:gap-0">
                <li 
                className="text-xl 
                cursor-pointer 
                font-regular">{t('team')}</li>
                <li 
                className="cursor-pointer 
                font-thin">{t('footer.aboutUs')}</li>
            </ul>
            <SupportForm />
            <ul 
            className="absolute 
            bottom-0
            
            max-md:flex
            max-md:flex-col
            max-md:items-center
            max-md:relative">
                <li className='text-4xl'><GitHubIcon 
                className="text-4xl
                duration-300  
                cursor-pointer 
                hover:drop-shadow-[0_0_10px_rgba(116,18,240,.8)]" fontSize='inherit'/></li>
                <li 
                className='text-base 
                text-white/40 
                cursor-default'>{t('footer.createdBy')}</li>
            </ul>

        </footer>
    )
}