import {H, Level} from 'react-accessible-headings';
import { Domine } from '@next/font/google'

const domine = Domine({
    weight: '500',
    subsets: ['latin'],
})


function LandingContent() {
return(
    <div className="bg-[url('/images/header_sh3.jpg')]">
        <main>
            <div className='pt-8'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            <H className={`${domine.className} text-center text-6xl font-bold`}>sanavaulth</H>
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
        </main>
    </div>
)
}
export default LandingContent;