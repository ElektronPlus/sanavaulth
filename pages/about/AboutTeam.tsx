import { useTranslation } from "next-i18next";
import Link from "next/link";

export const AboutTeam = () => {

    const { t } = useTranslation("common");

    return (
        <div>
            <div>
                <div>
                    <a href=""></a>
                    <img src="#"></img>
                    <p>Jan Szymański</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="#"></img>
                    <p>Krystian Wybranowski</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="#"></img>
                    <p>Bartosz Sułkowski</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="#"></img>
                    <p>Bartosz Maciejewski</p>
                </div>
            </div>
        </div>
    )
}