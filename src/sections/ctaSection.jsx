import { motion } from "motion/react";
import SectionHeader from "../components/sectionHeader";
import Button from "../components/button";

const CtaSection = () => {
  return (
    <section className="bg-black py-20 px-4 text-center">

      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8
          }}
        >
          <SectionHeader size="4">
            READY TO START YOUR FIRST{" "}
            <span className="text-[#FF5722]">
              RIDE
            </span>
          </SectionHeader>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-white text-lg md:text-xl"
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
            duration: 0.8,
            delay: 0.3
          }}
        >
          Book your first session today and experience the energy for yourself.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          whileHover={{
            scale: 1.05
          }}
        >
          <Button
            className="mt-6 px-5 py-2.5"
            text="Book Now"
          />
        </motion.div>

      </motion.div>

    </section>
  );
};

export default CtaSection;