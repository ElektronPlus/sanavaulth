import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default function File() {
    return (
        <>
            <div className="flex
            items-center
            justify-center">
                <ul className='relative
                flex
                flex-col
                items-center
                justify-center
                bg-[#090B1D]
                w-12
                h-12
                rounded-2xl
                text-center
                text-2xl
                
                sm:w-20
                sm:h-20
                sm:text-4xl'>
                    <li><InsertDriveFileOutlinedIcon fontSize='inherit'/></li>
                    <li className='absolute
                    right-[-10px]
                    bottom-[-5px]
                    bg-[#D2D2D2]
                    flex
                    items-center
                    justify-center
                    text-black
                    rounded-full
                    h-4
                    w-9
                    text-[10px]
                    
                    sm:h-5
                    sm:w-10
                    sm:text-[14px]'><p>TXT</p></li>
                    <li><p className='text-xs
                    absolute
                    bottom-[-40px]
                    left-0'>Nudesy Sanah</p></li>
                </ul>
                
            </div>
        </>
    )
}