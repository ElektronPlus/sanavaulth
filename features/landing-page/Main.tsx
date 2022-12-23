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
        className='max-[600px]:pl-[20px]
        max-[600px]:pr-[20px]'>
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
            
            max-[1199px]:text-[72px]
            
            max-[600px]:text-[48px]">{t('projectName')}</h1>
            <p 
            className="text-white/60 
            max-w-[400px] 
            text-center 
            font-thin
            text-[24px]
            
            max-[1199px]:text-[20px]
            max-[1199px]:max-w-[500px]
            
            max-[600px]:text-[16px]
            max-[600px]:max-w-[300px]">{t('main.quote')}</p>
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
        flex 
        rounded-[50px] 
        mt-[100px] 
        shadow-[0_0_250px_0_rgba(119,122,255,0.3)]
        
        
        max-[1199px]:h-[500px]
        max-[1199px]:rounded-[20px]
        
        max-[900px]:h-[415px]
        
        max-[768px]:h-[350px]"></div>

            <h2 
            className="text-center 
            text-[48px] 
            mt-[100px] 
            w-[600px] 
            leading-[60px]
            
            max-[1199px]:text-[36px]
            max-[1199px]:leading-[36px]
            
            max-[600px]:text-[24px]
            max-[600px]:max-w-[400px]">{t('main.heroTitle')}</h2>
            <p 
            className="text-center 
            w-[600px] 
            text-white/50 
            font-thin
            text-[18px] 
            mt-[10px]

            max-[900px]:text-[16px]
            max-[900px]:w-[500px]
            
            max-[600px]:max-w-[350px]
            max-[600px]:text-[14px]">{t('main.heroText')}</p>
        
        </div>
        

        <div 
        className="max-[768px]:snap-mandatory
        max-[768px]:snap-y
        max-[768px]:w-screen
        max-[768px]:h-inherit
        max-[768px]:overflow-x-scroll
        max-[768px]:oveflow-y-hidden
        max-[768px]:max-w-[90vw]">
        
        <div className='flex
        flex-wrap 
        gap-[50px] 
        mt-[100px]
    
        max-[1199px]:gap-[30px]
        max-[768px]:flex-nowrap
        max-[768px]:w-[1400px]


        '>
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
        
            text-[120px]
        
            max-[1199px]:max-w-[460px]
            max-[1199px]:h-[220px]
            max-[1199px]:rounded-[20px]
            max-[1199px]:text-[80px]
            
            max-[900px]:max-w-[330px]
            
            max-[768px]:snap-center
            max-[768px]:max-w-[300px]">
                
                <GppGoodIcon 
                className=" text-[rgba(255,255,255,.2)]
                drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                
                <h2 
                className="text-[36px] 
                font-thin

                max-[1199px]:text-[24px]">{t('main.cloudStorage')}</h2>
                
                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[500px]
                text-[14px] 
                text-white/50
                
                max-[1199px]:text-[12px]
                max-[1199px]:max-w-[350px]
                
                
                max-[900px]:max-w-[300px]
                max-[768px]:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
            text-[120px]
            
            max-[1199px]:max-w-[360px]
            max-[1199px]:h-[220px]
            max-[1199px]:text-[80px]
            max-[1199px]:rounded-[20px]
            
            max-[900px]:max-w-[330px]
            
            max-[768px]:snap-center
            max-[768px]:max-w-[300px]"> 
            
            <GppMaybeIcon 
            className="
            text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit'/> 
            
            <h2 
            className="text-[36px] 
            font-thin
            
            max-[1199px]:text-[24px]">{t('main.hackProtection')}
            </h2>
                
            <p 
            className="text-center 
            font-thin
            w-full
            max-w-[400px] 
            text-[14px]
          text-white/50
          
            max-[1199px]:text-[12px]
            max-[1199px]:max-w-[350px]
            
            max-[900px]:max-w-[300px]
            max-[768px]:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
            text-[120px]
            
            max-[1199px]:max-w-[360px]
            max-[1199px]:h-[220px]
            max-[1199px]:text-[80px]
            max-[1199px]:rounded-[20px]
            
            max-[900px]:max-w-[330px]
            
            max-[768px]:snap-center
            max-[768px]:max-w-[300px]"> 
            
            <PasswordIcon
            className="text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' /> 
            
            <h2 
            className="text-[36px] 
            font-thin
            
            max-[1199px]:text-[24px]">{t('main.fileEncryption')}</h2>
                
            <p 
            className="text-center 
            font-thin
            w-full
            max-w-[400px] 
            text-[14px]
          text-white/50
          
            max-[1199px]:text-[12px]
            max-[1199px]:max-w-[350px]
            
            max-[900px]:max-w-[300px]
            max-[768px]:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
            text-[120px]
        
            max-[1199px]:max-w-[460px]
            max-[1199px]:h-[220px]
            max-[1199px]:rounded-[20px]
            max-[1199px]:text-[80px]
            
            max-[900px]:max-w-[330px]
            
            max-[768px]:snap-center
            max-[768px]:max-w-[300px]">
                
            <PeopleAltIcon
            className="text-[rgba(255,255,255,.2)]
            drop-shadow-[0_0_30px_rgba(255,255,255,.8)]" fontSize='inherit' />
                
            <h2 
            className="text-[36px] 
            font-thin
            
            max-[1199px]:text-[24px]">{t('main.dataManagement')}</h2>
                
                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[500px]
                text-[14px] 
                text-white/50
                
                max-[1199px]:text-[12px]
                max-[1199px]:max-w-[350px]
                
                max-[900px]:max-w-[300px]
                max-[768px]:max-w-[275px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
        text-[120px]
        
        max-[1199px]:h-[300px]
        max-[1199px]:max-w-[850px]
        max-[1199px]:text-[80px]
        max-[1199px]:mt-[50px]
        max-[1199px]:rounded-[20px]
        
        max-[768px]:mt-[75px]
        
        max-[600px]:flex-col
        max-[600px]:h-[460px]
        max-[600px]:justify-center
        max-[600px]:p-[20px]">
            
            <div 
            className="flex 
            flex-col 
            items-center 
            gap-[20px]
            
            max-[1199px]:gap-0">

                <h2 
                className="text-[36px] 
                w-full 
                max-w-[450px] 
                text-center 
                font-thin
                
                max-[1199px]:text-[30px]
                
                max-[600px]:text-[24px]">Open-Source project</h2>

                <p 
                className="text-center 
                font-thin
                w-full
                max-w-[350px]
                text-[14px] 
              text-white/50
              
                max-[600px]:max-w-[300px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                
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
                        className="text-[20px]
                        font-regulat">{t('main.repo')}</li>
                    <li className='text-[40px]'><button 
                    className="w-[175px] 
                    h-[40px] 
                    rounded-full 
                    bg-gradient-to-tr 
                    from-[#7412F0] 
                    to-[#001271]
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