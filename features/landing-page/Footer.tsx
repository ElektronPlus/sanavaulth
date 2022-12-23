import GitHubIcon from '@mui/icons-material/GitHub';
import { SupportForm } from 'features/support-form/components/SupportForm';
import { useTranslation } from "next-i18next";

export default function Footer() {

    const { t } = useTranslation("common");

    return (
        <footer 
        className="w-full 
        max-w-[1200px]
        h-[250px] 
        mt-[100px] 
        pt-[20px] 
        flex 
        justify-between 
        border-t-[0.5px] 
        border-white/40 
        font-sans
        flex-wrap
        relative
        
        max-[768px]:flex-col
        max-[768px]:items-center
        max-[768px]:justify-even
        max-[768px]:h-[300px]">
            <p 
            className="text-[24px] 
            cursor-pointer 
            font-bold">{t('projectName')}</p>
            <ul 
            className="list-none 
            text-center 
            flex 
            flex-col 
            gap-[20px]
            
            max-[768px]:gap-0">
                <li 
                className="text-[20px] 
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
            
            max-[768px]:flex
            max-[768px]:flex-col
            max-[768px]:items-center
            max-[768px]:relative">
                <li className='text-[36px]'><GitHubIcon 
                className="text-[36px]
                duration-300  
                cursor-pointer 
                hover:drop-shadow-[0_0_10px_rgba(116,18,240,.8)]" fontSize='inherit'/></li>
                <li 
                className='text-[16px] 
                text-white/40 
                cursor-default'>{t('footer.createdBy')}</li>
            </ul>

        </footer>
    )
}