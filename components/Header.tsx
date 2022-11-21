import { H, Level } from 'react-accessible-headings';

function Header() {
    return(
        <div>
        <H className="text-center text-4xl font-bold">sanavaulth</H>
        <Level children={undefined}/>
        <p className="text-center">Bezpieczne miejsce dla Twoich plików.</p>
        
        </div>
    )
}
export default Header;