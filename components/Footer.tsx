import { H, Level } from 'react-accessible-headings';

function Footer() {
    return (
        <footer className="footer">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
                    <div className="space-y-4 text-xs text-gray-800">
                        <H className="font-bold">O NAS</H>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
