import SectionHeader from '../components/sectionHeader';
import CheckIcon from '../components/checkIcon';

const WhatToBring = () => {
    return (
        <div className="bg-black w-full text-center py-8 md:px-6 mx-auto">
            
            <SectionHeader>WHAT TO <span className="text-[#FF5722]">BRING</span></SectionHeader>

           
            <div className='flex flex-col md:flex-row md:items-stretch gap-5 max-w-5xl mx-auto'>
                
               
                <div className="w-full md:w-1/2 overflow-hidden md:rounded-2xl mb-6 md:mb-0 flex">
                    <img
                        src="/images/WhatToBring.png"
                        alt="What To Bring"
                        className="w-full h-full object-cover" 
                    />
                </div>

               
                <div className="relative mx-4 p-6 rounded-2xl border-l-6 border-l-amber-600 bg-[#0d0d0d] text-left border border-[#ff5722]/20 md:w-1/2 shadow-xl overflow-hidden flex flex-center items-center">
                    
                    <ul className="space-y-5 text-white text-base md:text-lg pl-3 w-full">
                        <li className="flex items-center gap-4">
                            <CheckIcon />
                            <span>Comfortable workout clothes</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <CheckIcon />
                            <span>Water bottle to stay hydrated</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <CheckIcon />
                            <span>Small towel</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <CheckIcon />
                            <span>Athletic shoes</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <CheckIcon />
                            <span>Arrive 10-15 minutes early</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default WhatToBring;