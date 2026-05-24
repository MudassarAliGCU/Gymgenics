import { useState } from 'react';
import { motion } from "motion/react";
import logo from '../assets/logo.svg';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState("Home");
    const [darkMode, setDarkMode] = useState(true);

    const navItems = [
        "Home",
        "Classes",
        "About",
        "Book"
    ];

    return (
        <nav className={`
            w-full h-20 p-2
            flex items-center justify-between
            md:px-10 md:h-22
            transition-all duration-500
            ${darkMode ? "bg-black text-white" : "bg-white text-black"}
        `}>

            {/* Logo */}
            <div>
                <img
                    src={logo}
                    alt="logo"
                    className='w-30 md:w-36 lg:w-40'
                />
            </div>


            {/* Desktop Menu */}
            <div className={`
                hidden md:block
                max-h-16 p-2 rounded-xl w-fit m-4
                transition-all duration-500
                ${
                    darkMode
                    ? "bg-[#292929]"
                    : "bg-gray-100 shadow-md"
                }
            `}>

                <ul className="flex items-center gap-2 text-lg font-medium">

                    {navItems.map((item) => (

                        <li
                            key={item}
                            onClick={() =>
                                setActivePage(item)
                            }
                            className={`
                            px-6 py-3 rounded-xl
                            cursor-pointer
                            flex items-center gap-2
                            transition-all duration-300
                            
                            ${
                                activePage === item
                                ? darkMode
                                    ? "bg-white text-[#FF5722]"
                                    : "bg-[#FF5722] text-white"
                                : darkMode
                                    ? "text-gray-400 hover:text-white"
                                    : "text-gray-600 hover:text-black"
                            }
                        `}
                        >

                            {activePage === item && (
                                <span className={`
                                h-2 w-2 rounded-full
                                ${
                                    darkMode
                                    ? "bg-[#FF5722]"
                                    : "bg-white"
                                }
                            `}/>
                            )}

                            {item}

                        </li>

                    ))}

                </ul>

            </div>


            {/* Right Side */}
            <div className="flex items-center gap-4">

                {/* Mobile menu */}
                <div
                    onClick={() => setIsMenuOpen(true)}
                    className='md:hidden cursor-pointer'
                >
                    <Menu />
                </div>


                {/* Theme Toggle */}
                <button
                    onClick={() =>
                        setDarkMode(!darkMode)
                    }
                    className={`
                        relative
                        w-14 h-8 rounded-full
                        transition-all duration-500
                        ${
                            darkMode
                            ? "bg-[#292929]"
                            : "bg-yellow-400"
                        }
                    `}
                >

                    <motion.div
                        animate={{
                            x: darkMode ? 0 : 24
                        }}
                        transition={{
                            duration: .3
                        }}
                        className="
                            absolute
                            left-1 top-1
                            w-6 h-6
                            rounded-full
                            bg-white
                            flex items-center justify-center
                        "
                    >

                        {darkMode
                            ? <Moon size={14}/>
                            : <Sun size={14}/>
                        }

                    </motion.div>

                </button>

            </div>


            {/* Mobile Drawer */}
            <div className={`
                fixed top-0 right-0
                h-screen w-2/3
                z-50
                transform transition-transform duration-300
                ${
                    isMenuOpen
                    ? 'translate-x-0'
                    : 'translate-x-full'
                }
                ${
                    darkMode
                    ? "bg-[#121212]"
                    : "bg-white"
                }
                md:hidden
            `}>

                <div className="flex justify-end p-6">

                    <button
                        onClick={() =>
                            setIsMenuOpen(false)
                        }
                    >
                        <X />
                    </button>

                </div>


                <ul className="flex flex-col items-center gap-10 mt-10 text-2xl font-medium">

                    {navItems.map((item) => (

                        <li
                            key={item}
                            onClick={() => {
                                setActivePage(item);
                                setIsMenuOpen(false);
                            }}
                            className={`
                                border-b border-gray-600
                                w-full text-center py-2
                                cursor-pointer transition-all
                                ${
                                    activePage === item
                                    ? "text-[#FF5722]"
                                    : "text-gray-400"
                                }
                            `}
                        >

                            {item}

                        </li>

                    ))}

                </ul>

            </div>

        </nav>
    );
};

export default Navbar;