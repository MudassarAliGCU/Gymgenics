import { motion } from "motion/react";
import Button from "../components/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden m-0 p-0">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/images/HeroSection-BG.jpg')]
        bg-cover bg-top bg-no-repeat
        grayscale contrast-90"
      />

      {/* Dark overlay (optional for better text visibility) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start">

        {/* Badge */}
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-yellow-400 px-2 py-1 tracking-widest text-sm mb-4 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full"
        >
          First Time?
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3
          }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase italic"
        >
          Your First <span className="text-orange-600">Ride</span>
          <br />
          Starts Here
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6
          }}
          className="text-gray-300 mt-4 max-w-md text-lg"
        >
          Everything you need to feel confident, prepared, and ready to go.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9
          }}
        >
          <Button
            className="mt-6 px-5 py-2.5"
            text="Book Now"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;