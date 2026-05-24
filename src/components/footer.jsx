import { motion } from "motion/react";
import logo from '../assets/logo.svg';
import Button from './button';
import facebook from '../assets/social-logo/facebook.svg';
import instagram from '../assets/social-logo/instagram.svg';
import linkedin from '../assets/social-logo/linkedin.svg';
import twitter from '../assets/social-logo/x.svg';

const Footer = () => {

    const links = ["Home", "Classes", "About", "Book"];

    const socials = [
        { name: "Facebook", icon: facebook },
        { name: "Instagram", icon: instagram },
        { name: "LinkedIn", icon: linkedin },
        { name: "Twitter", icon: twitter }
    ];

    return (
        <footer className='bg-[#121212] text-white p-4 md:p-2 lg:p-8 font-sans w-full'>

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className='p-6 border-b border-[#423836] w-full'
            >
                {logo && (
                    <img
                        src={logo}
                        alt="logo"
                        className='w-30 md:w-36 lg:w-40'
                    />
                )}
            </motion.div>


            <div className='grid grid-cols-2 grid-rows-2 gap-1.5 space-y-6 border-b border-[#423836] md:grid-cols-3 md:grid-rows-1 p-4'>

                {/* Navigation */}
                <ul className='space-y-3 text-lg border-r border-[#423836] mr-6 pr-8'>

                    {links.map((link, index) => (

                        <motion.li
                            key={link}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * .15
                            }}
                            whileHover={{
                                x: 8
                            }}
                            className='transition-colors duration-300 hover:text-[#FF5722] cursor-pointer'
                        >
                            {link}
                        </motion.li>

                    ))}

                </ul>


                {/* Social */}
                <ul className='space-y-3 text-lg'>

                    {socials.map((social, index) => (

                        <motion.li
                            key={social.name}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: .2 + index * .15
                            }}
                            whileHover={{
                                scale: 1.05,
                                x: 5
                            }}
                            className='cursor-pointer flex items-center gap-3 hover:text-[#FF5722] transition-colors'
                        >

                            <img
                                src={social.icon}
                                alt={social.name}
                                className='w-6 h-6'
                            />

                            {social.name}

                        </motion.li>

                    ))}

                </ul>


                {/* Subscribe card */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: .8,
                        delay: .4
                    }}
                    className='col-span-2 flex flex-col justify-around bg-white font-semibold md:col-span-1 p-4 rounded-2xl text-black'
                >

                    <h3 className='text-md mb-3'>
                        Stay updated with new classes and offers
                    </h3>

                    <div className='flex gap-2 h-10'>

                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='p-2 rounded border w-[70%] border-gray-300 bg-transparent outline-none focus:border-[#FF5722]'
                        />

                        <Button
                            text='Subscribe'
                        />

                    </div>

                </motion.div>

            </div>


            {/* Copyright */}
            <motion.div
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                viewport={{ once: true }}
                transition={{
                    delay: .8
                }}
                className='mt-8 md:mb-4 lg:mb-2 text-gray-500 text-md'
            >
                © 2026 Gymgenics. All rights reserved.
            </motion.div>

        </footer>
    );
};

export default Footer;