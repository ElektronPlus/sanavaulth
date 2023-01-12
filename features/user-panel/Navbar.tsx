import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Link from 'next/link'
import { useRouter } from 'next/router';

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
            sm:relative">
                    
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
                            <li className='w-10
                            h-10
                            bg-[#010416]
                            flex
                            items-center
                            justify-center
                            rounded-full
                            shadow-[0_0px_10px_0px_rgba(255,255,255,0.1)]

                            sm:w-14
                            sm:h-14
                            sm:rounded-lg
                            sm:shadow-[0_2px_0px_0px_rgba(255,255,255,0.1)]'>
                                <Link href="/vault" className={router.pathname == "/" ? "active" : ""}>
                                    <HomeOutlinedIcon fontSize='inherit' />
                                </Link>
                            </li>
                            
                            <li className='flex
                            items-center
                            justify-center'>
                                <Link href='/Liked' className={router.pathname == "/" ? "active" : ""}>
                                    <FavoriteBorderOutlinedIcon fontSize='inherit' />
                                </Link>
                            </li>
                            
                            <li className='flex
                            items-center
                            justify-center'>
                                <Link href="/Files">
                                    <FolderOutlinedIcon fontSize='inherit' />
                                </Link>
                            </li>

                            <li className='flex
                            items-center
                            justify-center'>
                                <Link href="/Shared">
                                    <ShareOutlinedIcon fontSize='inherit' />
                                </Link>
                            </li>
                            
                            <li className='flex
                            items-center
                            justify-center'>
                            <Link href="/Deleted">
                                <DeleteOutlineOutlinedIcon fontSize='inherit' />
                            </Link> 
                            </li>
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
