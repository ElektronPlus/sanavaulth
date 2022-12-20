import GppGoodIcon from '@mui/icons-material/GppGood';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import PasswordIcon from '@mui/icons-material/Password';
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from "next-i18next";

export default function Main() {
    const { t } = useTranslation("common");

    return (
        <main>
        <div 
        className="flex 
        items-center 
        justify-center 
        flex-col 
        mt-[150px] 
        font-sans">
            
            <h1 
            className="text-[96px] 
            tracking-wider 
            font-bold
            bg-gradient-to-tr
            from-[#fff] 
            to-[rgba(0,0,100,0.2)] 
            bg-clip-text
            text-transparent
            ">{t('projectName')}</h1>
            <p 
            className="text-white/60 w-[400px] 
            text-center 
            font-thin
            text-[24px]">{t('main.quote')}</p>
            <button 
            className="w-[150px] 
            h-[40px] 
            rounded-full 
            bg-gradient-to-tr 
            from-[#7412F0] 
            to-[#001271] 
            mt-[15px] 
            font-semibold 
            tracking-[2px]
            text-[14px] 
            hover:shadow-[0_0_20px_0_rgba(116,18,240,0.4)] 
            duration-300 ">{t('main.getStarted')}</button>
        
        <div 
        className="w-full 
        max-w-[1200px] 
        h-[700px] 
        bg-white/10 
        flex rounded-[50px] 
        mt-[100px] 
        shadow-[0_0_250px_0_rgba(119,122,255,0.3)]"></div>

            <h2 
            className="text-center 
            text-[48px] 
            mt-[100px] 
            w-[600px] 
            relative 
            leading-[60px]">{t('main.heroTitle')}</h2>
            <p 
            className="text-center 
            w-[600px] 
            text-white/50 
            font-thin
            text-[18px] 
            mt-[10px]">{t('main.heroText')}</p>
        
        </div>
        

        <div 
        className="flex 
        flex-wrap 
        gap-[50px] 
        mt-[100px]">
            
            <div 
            className="w-[700px] 
            h-[350px] 
            flex 
            flex-col
            items-center 
            justify-center 
            bg-[#111329]/50 
            rounded-[50px]
            gap-[10px] text-[120px]">
                
                <GppGoodIcon 
                className=" text-[rgba(255,255,255,.2)]
                drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                
                <h2 
                className="text-[36px] 
                font-normal">{t('main.cloudStorage')}</h2>
                
                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[500px]
                text-[14px] 
                text-white/50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                
            <div 
            className="col-end-1 
            w-[450px] 
            h-[350px] 
            flex 
            flex-col
            items-center 
            justify-center 
            bg-[#111329]/50 
            rounded-[50px]
            text-[120px]"> 
            <GppMaybeIcon 
            className="
            text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit'/> 
            
            <h2 
            className="text-[36px] 
            font-normal">{t('main.hackProtection')}</h2>
                
            <p 
            className="text-center 
            font-thin
            w-full
            max-w-[400px] 
            text-[14px]
          text-white/50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
           
           <div 
            className="w-[450px] 
            h-[350px] 
            flex 
            flex-col
            items-center 
            justify-center 
            bg-[#111329]/50 
            rounded-[50px]
            text-[120px]">
                 
            <PasswordIcon
            className="text-[150px]  
            text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' /> 
            
            <h2 
            className="text-[36px] 
            font-normal">{t('main.fileEncryption')}</h2>
                
            <p 
            className="text-center 
            font-thin
            w-full
            max-w-[400px]
            text-[14px] 
          text-white/50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            
            <div 
            className="w-[700px] 
            h-[350px] 
            flex 
            flex-col
            items-center 
            justify-center 
            bg-[#111329]/50 
            rounded-[50px]
            text-[120px]">
                 
            <PeopleAltIcon
            className="text-[150px]  
            text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                
            <h2 
            className="text-[36px] 
            font-normal">{t('main.dataManagement')}</h2>
                
            <p 
            className="text-center 
            font-thin
            w-full
            max-w-[500px]
            text-[14px] 
            text-white/50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        
        </div>
        
        <div 
        className="w-full 
        max-w-[1200px] 
        h-[450px] 
        mt-[100px] 
        flex 
        items-center 
        justify-around
        bg-[#111329]/50 
        rounded-[50px] 
        shadow-[0_0_200px_0_rgba(240,240,240,0.1)]">
            
            <div className="flex flex-col items-center gap-[20px]">

                <h2 className="text-[36px] w-full max-w-[450px] text-center font-thin">Open-Source project</h2>

                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[350px]
                text-[14px] 
              text-white/50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                
            </div>

            <div className="flex flex-col items-center text-[120px]">
                <CodeIcon className="text-[150px]
                text-[rgba(255,255,255,.2)]
                drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                <ul 
                    className="flex 
                    flex-col 
                    items-center 
                    gap-[20px]">
                    <li 
                        className="text-[20px]
                        font-semibold">{t('main.repo')}</li>
                    <li className='text-[40px]'><button 
                    className="w-[175px] 
                    h-[40px] 
                    rounded-full 
                    bg-gradient-to-tr 
                    from-[#7412F0] 
                    to-[#001271] f
                    font-semibold
                    text-[14px] 
                    tracking-[2px]
                    hover:shadow-[0_0_20px_0_rgba(116,18,240,0.4)] 
                    duration-300">{t('main.gitHub')}</button></li>
                </ul>
            </div>
        
        </div>
    
        </main>
    )
}