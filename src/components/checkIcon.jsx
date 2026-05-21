import { Check } from 'lucide-react';

const CheckIcon = () => {
  return (
    <div>
         <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1c120c] border border-[#ff5722]/30 shrink-0">
            <Check className=" text-[#ff5722]" size={22} strokeWidth={1.5} />
        </div>
    </div>
  )
}

export default CheckIcon
