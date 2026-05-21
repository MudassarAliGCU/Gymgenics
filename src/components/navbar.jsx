import { useState } from 'react';
import logo from '../assets/logo.svg'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav className='w-full bg-black h-20 p-2 text-white flex items-center justify-between md:px-10 md:h-22'>
            <div >
                {logo && <img src={logo} alt="logo" className='w-30 md:w-36 lg:w-40' />}
            </div>

            <div className="hidden md:block bg-[#292929] max-h-16 p-2 rounded-xl w-fit m-4">
                <ul className="flex items-center gap-2 text-lg font-medium text-gray-400">

                    <li className="flex items-center gap-2 bg-white text-[#FF5722] px-6 py-3 rounded-xl cursor-pointer">
                        <span className="h-2 w-2 rounded-full bg-[#FF5722]"></span>
                        Home
                    </li>


                    <li className="px-6 py-3 hover:text-white transition-colors cursor-pointer">
                        Classes
                    </li>
                    <li className="px-6 py-3 hover:text-white transition-colors cursor-pointer">
                        About
                    </li>
                    <li className="px-6 py-3 hover:text-white transition-colors cursor-pointer">
                        Book
                    </li>
                </ul>
            </div>

            <div onClick={() => setIsMenuOpen(true)} className='md:hidden'>
                <Menu />
            </div>

            {/* Menu Drawer */}
            <div className={`fixed top-0 right-0 h-screen w-2/3 bg-[#121212] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>

                <div className="flex justify-end p-6">
                    <button className="cursor-pointer" size={32} onClick={() => setIsMenuOpen(false)} >  <X /> </button>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col items-center gap-10 mt-10 text-2xl font-medium">
                    <li className="text-[#FF5722] border-b w-full border-gray-600 flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <span className="h-2 w-2 rounded-full bg-[#FF5722]"></span>
                        Home
                    </li>
                    <li className="text-gray-400 hover:text-white border-b border-gray-600 w-full text-center" onClick={() => setIsMenuOpen(false)}>Classes</li>
                    <li className="text-gray-400 hover:text-white border-b border-gray-600 w-full text-center" onClick={() => setIsMenuOpen(false)}>About</li>
                    <li className="text-gray-400 hover:text-white border-b border-gray-600 w-full text-center" onClick={() => setIsMenuOpen(false)}>Book</li>
                </ul>
            </div>

            <div> DARK </div>
        </nav>
    )
}

export default Navbar
