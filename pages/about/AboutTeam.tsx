import { Footer } from "features/landing-page/Footer";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Image from 'next/image'

export const AboutTeam = () => {

    const { t } = useTranslation("common");

    return (
        <div>
            <div className="flex mt-40">

                <div className="flex mx-8">
                    <a href="https://github.com/konhi">
                        <Image className="rounded-full" src="/../public/images/konhi.jpg"
                            alt="konhi-image"
                            width={500}
                            height={500}
                        />
                        <p className="items-center text-center mt-8">Jan Szymański</p>
                    </a>
                </div>
                <div className="flex mx-8">
                    <a href="https://github.com/wybran">
                        <Image className="rounded-full" src="/../public/images/wybran.jpg"
                            alt="wybran-image"
                            width={500}
                            height={500}
                        />
                        <p className="items-center text-center mt-8">Krystian Wybranowski</p>
                    </a>
                </div>
                <div className="flex mx-8">
                    <a href="https://github.com/mopsior">
                        <Image className="rounded-full" src="/../public/images/mopsior.jpg"
                            alt="mopsior-image"
                            width={500}
                            height={500}
                        />
                        <p className="items-center text-center mt-8">Bartosz Sułkowski</p>
                    </a>
                </div>
                <div className="flex mx-8">
                    <a href="https://github.com/ddebixx">
                        <Image className="rounded-full" src="/../public/images/andrii.jpg"
                            alt="andrii-image"
                            width={500}
                            height={500}
                        />
                        <p className="items-center text-center mt-8">Andrii Naida</p>
                    </a>
                </div>
                <div className="flex mx-8">
                    <a href="https://github.com/bkmac511">
                        <Image className="rounded-full" src="/../public/images/bkmac.jpg"
                            alt="bkmac-image"
                            width={500}
                            height={500}
                        />
                        <p className="items-center text-center mt-8">Bartosz Maciejewski</p>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
