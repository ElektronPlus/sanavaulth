import { Domine } from '@next/font/google'

const domine = Domine({
    weight: '500',
    subsets: ['latin'],
})


export function LandingContent() {
    return (
        <div className="bg-[url('/images/header_sh3.jpg')] h-screen">
            <main>
                <div className='pt-8'>
                    <p className={`${domine.className} text-center`}>sanavaulth to kompletne narzędzie do bezpiecznego przechowywania Twoich plików. </p>
                </div>
            </main>
        </div>
    )
}

