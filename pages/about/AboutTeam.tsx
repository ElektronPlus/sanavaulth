import { useTranslation } from "next-i18next";
import Image from 'next/image'

export const AboutTeam = () => {

    const { t } = useTranslation("common");

    return (
        <div>
            <div className="flex ">
                <a href="https://github.com/konhi">
                <Image src="/../public/images/konhi.jpg"
                    alt="konhi-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Jan Szymański</p>
                </a>
            </div>
            <div className="flex ">
                <a href="https://github.com/wybran">
                <Image src="/../public/images/wybran.jpg"
                    alt="wybran-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Krystian Wybranowski</p>
                </a>
            </div>
            <div className="flex ">
                <a href="https://github.com/mopsior">
                <Image src="/../public/images/mopsior.jpg"
                    alt="mopsior-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Bartosz Sułkowski</p>
                </a>
            </div>
            <div className="flex">
                <a href="https://github.com/ddebix">
                <Image src="/../public/images/andrii.jpg"
                    alt="andrii-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Andrii Naida</p>
                </a>
            </div>
            <div className="flex">
                <a href="https://github.com/bkmac511">
                <Image src="/../public/images/bkmac.jpg"
                    alt="bkmac-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Bartosz Maciejewski</p>
                </a>
            </div>
        </div>
    )
}
