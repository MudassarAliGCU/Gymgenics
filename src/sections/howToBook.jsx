import { motion } from "motion/react";
import SectionHeader from "../components/sectionHeader";
import StepCards from "../components/stepCards";
import { UserRound, Dumbbell, Bike } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserRound,
    title: "Create Your Account",
    description:
      "Sign up in seconds and unlock access to all classes and schedules.",
  },
  {
    number: "2",
    icon: Dumbbell,
    title: "Choose Your Class",
    description:
      "Browse available sessions and pick a time that fits your schedule.",
  },
  {
    number: "3",
    icon: Bike,
    title: "Show Up & Ride",
    description:
      "Arrive early, get set up, and enjoy your first high-energy experience.",
  },
];

const HowToBook = () => {
  return (
    <div className="bg-black w-full text-center py-12 px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader>
          HOW TO <span className="text-[#FF5722]">BOOK</span>
        </SectionHeader>
      </motion.div>

      {/* Progress Section Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hidden md:block relative max-w-4xl mx-auto mt-10 mb-14 px-6"
      >

        {/* Dark full line */}
        <div
          className="
            absolute
            top-1/2
            left-[10%]
            right-[10%]
            h-4
            rounded-full
            bg-[#181818]
            -translate-y-1/2
          "
        />

        {/* Active line only 1 → 2 */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '40%' }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: "easeOut"
          }}
          className="
            absolute
            top-1/2
            left-[10%]
            h-4
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            via-amber-500
            to-orange-600
            -translate-y-1/2
          "
        />

        {/* Circles */}
        <div className="relative flex justify-between items-center z-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.3,
                type: "spring",
                stiffness: 180
              }}
              className={`
                w-16 h-16 rounded-full
                flex items-center justify-center
                text-lg font-bold border-[4px]
                shadow-xl
                ${
                  index < 2
                    ? "bg-[#FF5722] border-yellow-400 text-white"
                    : "bg-[#0f0f0f] border-[#333] text-gray-500"
                }
              `}
            >
              {step.number}
            </motion.div>
          ))}

        </div>

      </motion.div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 max-w-6xl mx-auto">

        {steps.map((step, index) => (
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
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.2
            }}
            whileHover={{
              y: -10,
              scale: 1.03
            }}
            className="flex-1"
          >
            <StepCards
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default HowToBook;