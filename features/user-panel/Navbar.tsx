import { useRouter } from 'next/router';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { NavbarButton } from './NavbarButton';

export const Navbar = () => {
    const router = useRouter();
    
    return (
        <>
            <div 
            className="flex 
            justify-center 
            align-center 
            self-center 
            flex-col 
            w-[100vw]
            fixed
            bottom-0
            bg-[#090B1D]

            sm:w-[120px]
            sm:h-[100vh]
            sm:left-0">
                    
                    <div 
                    className="bg-[#090B1D]
                    h-16
                    w-full
                    text-center
                    flex
                    items-center
                    justify-between
                    px-5
                    
                    sm:flex-col
                    sm:h-full
                    sm:relative">
                        {/* here */}
                        <ul 
                        className='flex
                        flex-row
                        gap-5
                        text-2xl
                        
                        sm:flex-col
                        sm:text-3xl
                        sm:absolute
                        sm:top-28
                        sm:gap-7'>
                            <NavbarButton type='home' selected={router.asPath == '/vault'} />
                            <NavbarButton type='liked' selected={router.asPath == '/Liked'} />
                            <NavbarButton type='files' selected={router.asPath == '/Files'} />
                            <NavbarButton type='shared' selected={router.asPath == '/Shared'} />
                            <NavbarButton type='deleted' selected={router.asPath == '/Deleted'} />
                        </ul>
                        <SettingsOutlinedIcon className='text-2xl
                        flex
                        items-center
                        justify-center

                        sm:absolute
                        sm:bottom-0
                        sm:text-3xl'/>
                    </div>
                    <div className="bg-[#090B1D]
                    h-16
                    w-full
                    flex
                    flex-row
                    items-center
                    justify-between
                    px-5
                    z-30
                    shadow-[0_35px_60px_15px_rgba(0,0,0,0.5)]
                    
                    sm:flex-col
                    sm:shadow-none">
                        <ul className='flex 
                        flex-row 
                        items-center 
                        gap-3
                        
                        sm:absolute
                        sm:top-5'>
                            <li><img src="https://cdn.discordapp.com/attachments/1034917101300879371/1053363924277403750/318776430_475431438013810_5437310006260211539_n.jpg" alt="" 
                            className='w-9 
                            rounded-full
                            
                            sm:w-16' /></li>
                            <li><p 
                            className='font-sans 
                            text-lg
                            
                            sm:hidden'>Witaj <span 
                            className='font-bold
                            bg-gradient-to-bl
                            from-[#7458F0] 
                            to-[#002e82] 
                            bg-clip-text
                            text-transparent
                            text-xl'>Sanah</span>!👋</p></li>
                        </ul> 
                        <MenuIcon className='sm:hidden'/> 
                    </div>
            </div>
        </>
    )
}