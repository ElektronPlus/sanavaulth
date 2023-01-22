import { useTranslation } from "next-i18next";
import Image from 'next/image'

export const AboutTeam = () => {

    const { t } = useTranslation("common");

    return (
        <div>
            <div className="flex ">
                <a href="">
                <Image src="../public/images/konhi.jpg"
                    alt="konhi-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Jan Szymański</p>
                </a>
            </div>
            <div className="flex ">
                <Image src="../public/images/wybran.jpg"
                    alt="wybran-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Krystian Wybranowski</p>
            </div>
            <div className="flex ">
                <Image src="../public/images/mopsior.jpg"
                    alt="mopsior-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Bartosz Sułkowski</p>
            </div>
            <div className="flex">
                <Image src="../public/images/bkmac.jpg"
                    alt="bkmac-image"
                    width={500}
                    height={500}>
                </Image>
                <p>Bartosz Maciejewski</p>
            </div>
        </div>
    )
}
