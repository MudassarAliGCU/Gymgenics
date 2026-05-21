import React from 'react';
import SectionHeader from "../components/sectionHeader";
import Question from "../components/question";

const FaqSection = () => {
  return (
    <div className="bg-black flex px-4 flex-col md:items-start w-full text-center py-8 md:px-6 mx-auto">
      <SectionHeader>GOT <span className="text-[#FF5722]">QUESTIONS ?</span></SectionHeader>
      
      <div className="flex flex-col gap-3 w-full mt-6">
        <Question 
          question="Do i need prior experience?" 
          answer="Not at all! Our classes cater to all fitness levels, from absolute beginners to advanced athletes. Our coaches will scale every workout to match your current ability." 
        />
        <Question 
          question="What should I wear?" 
          answer="Wear comfortable, breathable athletic clothing and supportive training shoes. Bring a water bottle and a sweat towel!" 
        />
        <Question 
          question="How early should i arrive?" 
          answer="We recommend arriving 10-15 minutes before your first class so we can show you around, introduce you to the coach, and get you set up." 
        />
        <Question 
          question="Can i bring a friend?" 
          answer="Yes! We love hosting guests. First-time local guests can usually try a class for free, just make sure to register them ahead of time." 
        />
        <Question 
          question="Is there parking available?" 
          answer="Yes, we have free dedicated parking directly in front of the building as well as overflow parking along the side street." 
        />
        <Question 
          question="What if i need to cancel?" 
          answer="You can cancel your class reservation up to 2 hours before it starts via our app without any penalties." 
        />
      </div>
    </div>
  )
}

export default FaqSection;