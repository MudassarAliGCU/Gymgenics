import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Question = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col bg-[#292929] rounded-3xl border border-[#333] hover:border-[#ff5722]/50 transition-colors overflow-hidden'>
            <div 
                onClick={() => setIsOpen(!isOpen)} 
                className='flex justify-between items-center p-5 cursor-pointer select-none'
            >
                <h2 className='text-lime-50 font-medium text-left'>{question}</h2>
                <div className="shrink-0 ml-4">
                    {isOpen ? (
                        <ChevronUp className="text-[#ff5722]" size={20} />
                    ) : (
                        <ChevronDown className="text-gray-400" size={20} />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className='px-5 pb-5 text-white font-semibold text-left text-base border-t border-[#333]/50 pt-4 tracking-wide leading-relaxed'>
                    {answer}
                </div>
            )}
        </div>
    )
}

export default Question;