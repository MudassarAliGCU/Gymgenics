import logo from '../assets/logo.svg'
import Button from './button';

const Footer = () => {
    return (
        <footer className='bg-[#121212] text-white p-4 md:p-2 lg:p-8 font-sans w-full'>
            <div className='p-6 border-b border-[#423836] w-full'>
                {logo && <img src={logo} alt="logo" className='w-30 md:w-36 lg:w-40' />}
            </div>

            <div className='grid grid-cols-2 grid-rows-2 gap-1.5 space-y-6 border-b border-[#423836] md:grid-cols-3 md:grid-rows-1 p-4'>
                <ul className='space-y-2 text-md border-r border-[#423836] mr-6 pr-8'>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>Home</li>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>Classes</li>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>About</li>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>Book</li>
                </ul>
                <ul className='space-y-2 text- md:border-r border-[#423836] text-center md:mr-8'>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>Facebook</li>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>Instagram</li>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>LinkedIn</li>
                    <li className='transition-transform duration-300 hover:scale-105 hover:text-[#FF5722] cursor-pointer'>Twitter</li>
                </ul>

                <div className='col-span-2 flex flex-col justify-around bg-white font-semibold md:col-span-1 p-2 rounded-2xl text-black'>
                <h3 className=' text-md '>Stay updated with new classes and offers</h3>

                <div className='flex gap-2 h-8'>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='p-2 rounded border w-[70%] border-gray-300 bg-transparent outline-none focus:border-[#FF5722]'
                    />
                    <Button text='Subscribe' />
                </div>
            </div>

            </div>


            <div className='mt-8 md:mb-4 lg:mb-2 text-gray-500 text-md'>
                © 2026 Gymgenics. All rights reserved.
            </div>
            <div>


            </div>
        </footer>
    )
}

export default Footer
