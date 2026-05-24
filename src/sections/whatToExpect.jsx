import SectionHeader from '../components/sectionHeader'
import { motion } from 'motion/react'
import { Clock5, UserRound, Flower2, ChartNoAxesColumnIncreasing } from 'lucide-react'

const cards = [
  {
    icon: Clock5,
    title: "Expert Instruction",
    text: "Learn from our experienced instructors who are passionate about teaching and ensuring your safety."
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Progress Tracking",
    text: "Track your performance and improve your riding skills over time."
  },
  {
    icon: Flower2,
    title: "Relaxed Environment",
    text: "Enjoy a comfortable and welcoming atmosphere while learning."
  },
  {
    icon: UserRound,
    title: "Fun & Exciting Rides",
    text: "Enjoy a variety of routes and experiences that make every ride memorable."
  }
]

const WhatToExpect = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 bg-gray-100'>

      {/* Heading Animation */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader theme="light">
          WHAT TO <span className="text-[#FF5722]">EXPECT</span>
        </SectionHeader>
      </motion.div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:w-[80%] gap-6 mt-6'>

        {cards.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2
              }}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              className='flex gap-4 bg-white p-4 rounded-lg shadow-md cursor-pointer'
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#f4f4f4] rounded-full shrink-0">
                <Icon
                  className="text-black"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  {item.title}
                </h3>

                <p className='text-gray-600'>
                  {item.text}
                </p>
              </div>

            </motion.div>
          )
        })}

      </div>
    </div>
  )
}

export default WhatToExpect