import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Home = () => {
  const { t } = useTranslation("common")
    return (
        <>
          <div className="flex">
            <div className="flex
            flex-col
            justify-center
            items-center
            w-full
            h-[100vh]
            gap-5">

                  <img src="https://cdn.discordapp.com/attachments/1034917101300879371/1053363924277403750/318776430_475431438013810_5437310006260211539_n.jpg" alt="" 
                  className='sm:rounded-2xl
                  sm:w-24
                  sm:block
                  
                  hidden' />

                <h1 className='sm:text-5xl
                sm:font-sans
                sm:font-bold
                sm:block

                hidden'>{t("userPanel.greeting")}<span 
                className='sm:bg-gradient-to-bl
                from-[#7458F0] 
                to-[#002e82] 
                sm:bg-clip-text
                sm:text-transparent'>{t("userPanel.userName")}</span>👋</h1>

                <h2 className="text-2xl
                mt-40">{t("userPanel.freeSpace")}</h2>
            
                  <div className="w-[50vw]
                  h-8
                  bg-stone-900
                  rounded-full
                  relative"> <div className="absolute
                  w-[80%]
                  h-full
                  bg-gradient-to-bl
                  from-[#7458F0] 
                  to-[#002e82]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-sans"><span>{t("userPanel.spacePercentage")}</span></div> 
                  </div>
                
                  <h3 className="text-2xl
                  font-sans
                  mt-24
                  
                  sm:hidden">{t("userPanel.myFiles")}</h3>

                  <div className="w-28
                  h-28
                  bg-[#090B1D]
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-5xl
                  
                  sm:mt-20
                  sm:h-32
                  sm:w-32
                  sm:shadow-[0_4px_0px_0px_rgba(255,255,255,0.1)]">
                  <Link href="/Files">
                    <FolderOutlinedIcon fontSize='inherit' />
                  </Link>
                    <p className='hidden

                  sm:text-xl
                  sm:font-light
                  sm:block'>{t("userPanel.myFiles")}</p></div>
            </div>
          </div>
        </>
    )
}
