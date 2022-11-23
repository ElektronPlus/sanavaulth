import { H, Level } from 'react-accessible-headings';
import { Domine } from '@next/font/google'

const domine = Domine({
    weight: '500',
    subsets: ['latin'],
})

function Header() {
    return (
        <div className=" absolute bg-[url('/images/bio_bg.jpg')]">
                <div className='pt-14'>
                    <div className='pb-14'>
                        <H className={`${domine.className} text-center text-6xl font-bold text-black`}>sanavaulth</H>
                        <p className="text-center text-black">Eldorado dla Twoich Plików</p>
                    </div>
                </div>
        </div>
    )
}
export default Header;
