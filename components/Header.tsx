import { Domine } from '@next/font/google'
import { LogInButton } from './LogInButton'

const domine = Domine({
    weight: '500',
    subsets: ['latin'],
})

export function Header() {
    return (
        <div className="bg-[url('/images/bio_bg.jpg')] h-screen">
            <LogInButton />
            <h1 className={`${domine.className} pt-44 text-center text-6xl font-bold text-black`}>sanavaulth</h1>
            <p className="text-center text-black">Eldorado dla Twoich Plików</p>
        </div>
    )
}
