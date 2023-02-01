import { useTranslation } from "next-i18next";
import Image from 'next/image'
import andriiPicture from '../../public/images/andrii.jpg'
import bkmacPicture from '../../public/images/bkmac.jpg'
import konhiPicture from '../../public/images/konhi.jpg'
import mopsiorPicture from '../../public/images/mopsior.jpg'
import wybranPicture from '../../public/images/wybran.jpg'



export default function AboutTeam() {

    const { t } = useTranslation("common");

    return (
        <div className="flex items-center justify-center">
            <div className="flex mt-40 flex-wrap w-full max-w-[800px] justify-center gap-10">
            <a href="https://github.com/konhi">
                <div className="flex flex-col text-center items-center justify-center mx-8">
                    
                        <Image className="rounded-full" src={konhiPicture}
                            alt="konhi-image"
                            width={100}
                            height={100}
                        />
                        <p className="mt-8">Jan Szymański</p>
                </div>
            </a>
            
            <a href="https://github.com/wybran">
            <div className="flex flex-col text-center items-center justify-center mx-8">
                        <Image className="rounded-full" src={ wybranPicture}
                            alt="wybran-image"
                            width={100}
                            height={100}
                        />
                        <p className="mt-8">Krystian Wybranowski</p>
                </div>
            </a>

            <a href="https://github.com/mopsior">
                <div className="flex flex-col text-center items-center justify-center mx-8">
                        <Image className="rounded-full" src={ mopsiorPicture}
                            alt="mopsior-image"
                            width={100}
                            height={100}
                        />
                        <p className="mt-8">Bartosz Sułkowski</p> 
                </div>
            </a>
                <a href="https://github.com/ddebixx">
                <div className="flex flex-col text-center items-center justify-center mx-8">
                        <Image className="rounded-full" src={ andriiPicture}
                            alt="andrii-image"
                            width={100}
                            height={100}
                        />
                        <p className="mt-8">Andrii Naida</p>
                </div>
                </a>
                <a href="https://github.com/bkmac511">
                <div className="flex flex-col text-center items-center justify-center mx-8">
                    <Image className="rounded-full" src={ bkmacPicture}
                        alt="bkmac-image"
                        width={100}
                        height={100}
                    />
                    <p className="mt-8">Bartosz Maciejewski</p>
                </div>
                </a>
            </div>
            </div>
        
    )
}
