import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Link from 'next/link'
import { twMerge } from 'tailwind-merge';

interface NavbarButtonProps {
    type: "home" | "liked" | "files" | "shared" | "deleted" | undefined,
    selected?: boolean
}

export const NavbarButton = ({ type, selected }: NavbarButtonProps) => {
    return (
        <li className={twMerge('flex items-center justify-center', selected && 'w-10 h-10 bg-[#010416] flex items-center justify-center rounded-full shadow-[0_0px_10px_0px_rgba(255,255,255,0.1)] sm:w-14 sm:h-14 sm:rounded-lg sm:shadow-[0_2px_0px_0px_rgba(255,255,255,0.1)]')}>
            <Link href={`/${type}`}>
                {type == "home" && <HomeOutlinedIcon fontSize='inherit' />}
                {type == "liked" && <FavoriteBorderOutlinedIcon fontSize='inherit' />}
                {type == "files" && <FolderOutlinedIcon fontSize='inherit' />}
                {type == "shared" && <ShareOutlinedIcon fontSize='inherit' />}
                {type == "deleted" && <DeleteOutlineOutlinedIcon fontSize='inherit' />}
            </Link>
        </li>
    )
}