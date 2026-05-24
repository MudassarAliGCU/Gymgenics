import React from 'react';
import { motion } from "motion/react";
import SectionHeader from "../components/sectionHeader";
import Question from "../components/question";

const faqData = [
  {
    question: "Do i need prior experience?",
    answer:
      "Not at all! Our classes cater to all fitness levels, from absolute beginners to advanced athletes. Our coaches will scale every workout to match your current ability.",
  },
  {
    question: "What should I wear?",
    answer:
      "Wear comfortable, breathable athletic clothing and supportive training shoes. Bring a water bottle and a sweat towel!",
  },
  {
    question: "How early should i arrive?",
    answer:
      "We recommend arriving 10-15 minutes before your first class so we can show you around, introduce you to the coach, and get you set up.",
  },
  {
    question: "Can i bring a friend?",
    answer:
      "Yes! We love hosting guests. First-time local guests can usually try a class for free, just make sure to register them ahead of time.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have free dedicated parking directly in front of the building as well as overflow parking along the side street.",
  },
  {
    question: "What if i need to cancel?",
    answer:
      "You can cancel your class reservation up to 2 hours before it starts via our app without any penalties.",
  },
];

const FaqSection = () => {
  return (
    <div className="bg-black flex px-4 flex-col md:items-start w-full text-center py-8 md:px-6 mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader>
          GOT <span className="text-[#FF5722]">QUESTIONS ?</span>
        </SectionHeader>
      </motion.div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-3 w-full mt-6">

        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12
            }}
            whileHover={{
              y: -4
            }}
          >
            <Question
              question={item.question}
              answer={item.answer}
              answerClass="text-gray-300 leading-relaxed"
            />
          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default FaqSection;