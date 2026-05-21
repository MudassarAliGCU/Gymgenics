import SectionHeader from '../components/sectionHeader'
import { Clock5 } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Flower2 } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react';

const WhatToExpect = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 bg-gray-100'>
      <SectionHeader theme="light" >WHAT TO <span className="text-[#FF5722]">EXPECT</span></SectionHeader>
      <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:w-[80%] gap-6 mt-6'>
        <div className='flex gap-4 bg-white p-4 rounded-lg shadow-md'>
          <div className="flex items-center justify-center w-12 h-12 bg-[#f4f4f4] rounded-full shrink-0">
            <Clock5 className="text-black" size={22} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Expert Instruction</h3>
            <p className='text-gray-600'>Learn from our experienced instructors who are passionate about teaching and ensuring your safety.</p>
          </div>
        </div>
        <div className='flex gap-4 bg-white p-4 rounded-lg shadow-md'>
          <div className="flex items-center justify-center w-12 h-12 bg-[#f4f4f4] rounded-full shrink-0">
            <ChartNoAxesColumnIncreasing className="text-black" size={22} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Expert Instruction</h3>
            <p className='text-gray-600'>Learn from our experienced instructors who are passionate about teaching and ensuring your safety.</p>
          </div>
        </div>
        <div className='flex gap-4 bg-white p-4 rounded-lg shadow-md'>
          <div className="flex items-center justify-center w-12 h-12 bg-[#f4f4f4] rounded-full shrink-0">
            <Flower2 className="text-black" size={22} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Expert Instruction</h3>
            <p className='text-gray-600'>Learn from our experienced instructors who are passionate about teaching and ensuring your safety.</p>
          </div>
        </div>
        <div className='flex gap-4 bg-white p-4 rounded-lg shadow-md'>
          <div className="flex items-center justify-center w-12 h-12 bg-[#f4f4f4] rounded-full shrink-0">
            <UserRound className="text-black" size={22} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>Fun & Exciting Rides</h3>
            <p className='text-gray-600'>Enjoy a variety of routes and experiences that make every ride memorable.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatToExpect
