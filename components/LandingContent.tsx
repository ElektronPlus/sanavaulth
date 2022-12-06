import { Domine } from '@next/font/google'

const domine = Domine({
    weight: '500',
    subsets: ['latin'],
})


function LandingContent() {
    return (
        <div className="bg-[url('/images/header_sh3.jpg')] h-screen">
            <main>
                <div className='pt-8'>
                    <h1 className={`${domine.className} text-center text-6xl font-bold`}>sanavaulth</h1>
                </div>
            </main>
        </div>
    )
}
export default LandingContent;
