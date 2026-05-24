import { motion } from "motion/react";
import SectionHeader from "../components/sectionHeader";
import CheckIcon from "../components/checkIcon";

const items = [
  "Comfortable workout clothes",
  "Water bottle to stay hydrated",
  "Small towel",
  "Athletic shoes",
  "Arrive 10–15 minutes early",
];

const WhatToBring = () => {
  return (
    <div className="bg-black w-full text-center py-8 md:px-6 mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <SectionHeader>
          WHAT TO <span className="text-[#FF5722]">BRING</span>
        </SectionHeader>
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-stretch gap-5 max-w-5xl mx-auto">

        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2 }}
          className="w-full md:w-1/2 overflow-hidden md:rounded-2xl mb-6 md:mb-0 flex"
        >
          <img
            src="/images/WhatToBring.png"
            alt="What To Bring"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.02 }}
          className="relative mx-4 p-6 rounded-2xl border-l-6 border-l-amber-600 bg-[#0d0d0d] text-left border border-[#ff5722]/20 md:w-1/2 shadow-xl overflow-hidden flex items-center"
        >

          <ul className="space-y-5 text-white text-base md:text-lg pl-3 w-full">

            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.2
                }}
                className="flex items-center gap-4"
              >
                <CheckIcon />
                <span>{item}</span>
              </motion.li>
            ))}

          </ul>

        </motion.div>

      </div>
    </div>
  );
};

export default WhatToBring;