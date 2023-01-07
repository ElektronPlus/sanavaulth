import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

export const Home = () => {
    return (
        <>
          <div className="flex">
            <div className="flex
            flex-col
            justify-center
            items-center
            w-full
            gap-5
            
            sm:w-[80%]">
                <h1 className="text-2xl
                mt-40">Zajęte miejsce</h1>
            
                  <div className="w-[70vw]
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
                  font-sans"><span className='sm:hidden'>80%</span></div> 
                  </div>
                
                  <h2 className="text-2xl
                  font-sans
                  mt-24">Moje pliki</h2>

                  <div className="w-24
                  h-24
                  bg-[#090B1D]
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-5xl"><FolderOutlinedIcon fontSize='inherit' /></div>
            </div>
          </div>
        </>
    )
}
