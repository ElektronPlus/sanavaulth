import { H, Level } from 'react-accessible-headings';
import { Domine } from '@next/font/google'

const domine = Domine({
    weight: '500',
    subsets: ['latin'],
})

function Header() {
    return (
        <div className="bg-[url('/images/bio_bg.jpg')]">
            <main>
                <div className='pt-8'>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                            <H className={`${domine.className} text-center text-6xl font-bold text-black`}>sanavaulth</H>
                            <Level children={undefined} />
                            <p className="text-center text-black">Eldorado dla Twoich Plików</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Header;