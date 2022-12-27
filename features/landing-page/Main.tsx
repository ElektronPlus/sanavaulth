import GppGoodIcon from '@mui/icons-material/GppGood';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import PasswordIcon from '@mui/icons-material/Password';
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from "next-i18next";

export default function Main() {
    const { t } = useTranslation("common");

    return (
        <main 
        className='max-sm:pl-5
        max-sm:pr-5'>
        <div 
        className="flex 
        items-center 
        justify-center 
        flex-col 
        mt-[150px] 
        font-sans">
            
            <h1 
            className="text-8xl 
            tracking-widest 
            font-bold
            bg-gradient-to-tr
            from-[#fff] 
            to-[rgba(0,0,100,0.2)] 
            bg-clip-text
            text-transparent
            
            max-xl:text-7xl
            
            max-sm:text-5xl">{t('projectName')}</h1>
            <p 
            className="text-white/60 
            max-w-[400px] 
            text-center 
            font-thin
            text-2xl
            
            max-[1199px]:text-xl
            max-[1199px]:max-w-[500px]
            
            max-sm:text-base
            max-sm:max-w-[300px]">{t('main.quote')}</p>
            <button 
            className="w-[150px] 
            h-10 
            rounded-full 
            bg-gradient-to-tr 
            from-[#7412F0] 
            to-[#001271] 
            mt-4 
            font-semibold 
            tracking-widest
            text-sm
            hover:shadow-[0_0_20px_0_rgba(116,18,240,0.4)] 
            duration-300 ">{t('main.getStarted')}</button>
        
        <div 
        className="w-full 
        max-w-[1200px] 
        h-[700px] 
        bg-white/10 
        flex 
        rounded-[50px] 
        mt-24 
        shadow-[0_0_250px_0_rgba(119,122,255,0.3)]
        
        
        max-xl:h-[500px]
        max-xl:rounded-3xl
        
        max-lg:h-[415px]
        
        max-md:h-[350px]"></div>

            <h2 
            className="text-center 
            text-5xl 
            mt-24 
            w-[600px] 
            leading-[60px]
            
            max-xl:text-4xl
            max-xl:leading-9
            
            max-sm:text-2xl
            max-sm:max-w-[400px]">{t('main.heroTitle')}</h2>
            <p 
            className="text-center 
            w-[600px] 
            text-white/50 
            font-thin
            text-lg 
            mt-3

            max-lg:text-base
            max-lg:w-[500px]
            
            max-sm:max-w-[350px]
            max-sm:text-sm">{t('main.heroText')}</p>
        
        </div>
        

        <div 
        className="max-md:snap-mandatory
        max-md:snap-y
        max-md:w-screen
        max-md:h-inherit
        max-md:overflow-x-scroll
        max-md:oveflow-y-hidden
        max-md:max-w-[90vw]">
        
        <div className='flex
        flex-wrap 
        gap-12 
        mt-24
    
        max-xl:gap-8
        max-md:flex-nowrap
        max-md:w-[1300px]'>
            <div 
            className="w-full
            max-w-[700px] 
            h-[350px] 
            flex 
            flex-col
            items-center 
            justify-center 
          bg-[#111329]/50 
            rounded-[50px]
        
            text-9xl
        
            max-xl:max-w-[460px]
            max-xl:h-56
            max-xl:rounded-3xl
            max-xl:text-7xl
            
            max-lg:max-w-[330px]
            
            max-md:snap-center
            max-md:max-w-[300px]">
                
                <GppGoodIcon 
                className=" text-[rgba(255,255,255,.2)]
                drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                
                <h2 
                className="text-4xl 
                font-thin

                max-xl:text-2xl">{t('main.cloudStorage')}</h2>
                
                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[500px]
                text-sm 
                text-white/50
                
                max-xl:xs
                max-xl:max-w-[350px]
                
                
                max-lg:max-w-[300px]
                max-md:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
            text-9xl
            
            max-xl:max-w-[360px]
            max-xl:h-56
            max-xl:text-7xl
            max-xl:rounded-3xl
            
            max-lg:max-w-[330px]
            
            max-md:snap-center
            max-md:max-w-[300px]"> 
            
            <GppMaybeIcon 
            className="
            text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit'/> 
            
            <h2 
            className="text-4xl 
            font-thin
            
            max-xl:text-2xl">{t('main.hackProtection')}
            </h2>
                
            <p 
            className="text-center 
            font-thin
            w-full
            max-w-[400px] 
            text-sm
          text-white/50
          
            max-xl:text-xs
            max-xl:max-w-[350px]
            
            max-lg:max-w-[300px]
            max-md:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
            text-9xl
            
            max-xl:max-w-[360px]
            max-xl:h-56
            max-xl:text-7xl
            max-xl:rounded-3xl
            
            max-lg:max-w-[330px]
            
            max-md:snap-center
            max-md:max-w-[300px]"> 
            
            <PasswordIcon
            className="text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' /> 
            
            <h2 
            className="text-4xl 
            font-thin
            
            max-xl:text-2xl">{t('main.fileEncryption')}</h2>
                
            <p 
            className="text-center 
            font-thin
            w-full
            max-w-[400px] 
            text-sm
          text-white/50
          
            max-xl:text-xs
            max-xl:max-w-[350px]
            
            max-lg:max-w-[300px]
            max-md:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            
            <div 
            className="w-full
            max-w-[700px] 
            h-[350px] 
            flex 
            flex-col
            items-center 
            justify-center 
          bg-[#111329]/50 
            rounded-[50px] 
            text-9xl
        
            max-xl:max-w-[460px]
            max-xl:h-[220px]
            max-xl:rounded-[20px]
            max-xl:text-7xl
            
            max-lg:max-w-[330px]
            
            max-md:snap-center
            max-md:max-w-[300px]">
                
            <PeopleAltIcon
            className="text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                
            <h2 
            className="text-4xl 
            font-thin
            
            max-xl:text-2xl">{t('main.dataManagement')}</h2>
                
                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[500px]
                text-sm 
                text-white/50
                
                max-xl:text-xs
                max-xl:max-w-[350px]
                
                max-lg:max-w-[300px]
                max-md:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
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
        shadow-[0_0_200px_0_rgba(240,240,240,0.1)]
        text-9xl
        
        max-xl:h-[300px]
        max-xl:max-w-[850px]
        max-xl:text-7xl
        max-xl:mt-[50px]
        max-xl:rounded-[20px]
        
        max-md:mt-20
        
        max-sm:flex-col
        max-sm:h-[460px]
        max-sm:justify-center
        max-sm:p-5">
            
            <div 
            className="flex 
            flex-col 
            items-center 
            gap-5
            
            max-xl:gap-0">

                <h2 
                className="text-4xl 
                w-full 
                max-w-[450px] 
                text-center 
                font-thin
                
                max-xl:text-3xl
                
                max-sm:text-2xl">{t('main.openSource')}</h2>

                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[350px]
                text-sm
              text-white/50
              
                max-sm:max-w-[300px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                
            </div>

            <div className="flex 
            flex-col 
            items-center">
                <CodeIcon className="text-white/20
                drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                <ul 
                    className="flex 
                    flex-col 
                    items-center">
                    <li 
                        className="text-xl
                        font-regulat">{t('main.repo')}</li>
                    <li className='text-4xl'><button 
                    className="w-44 
                    h-10 
                    rounded-[50px] 
                    bg-gradient-to-tr 
                    from-[#7412F0] 
                    to-[#001271]
                    font-semibold
                    text-sm
                    tracking-widest
                    hover:shadow-[0_0_20px_0_rgba(116,18,240,0.4)] 
                    duration-300">{t('main.gitHub')}</button></li>
                </ul>
            </div>
        
        </div>
    
        </main>
    )
}