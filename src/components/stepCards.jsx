const StepCards = ({ icon: Icon, title, description }) => {
    return (

        <div className='flex flex-col items-center text-center gap-4 bg-[#393737] p-6 rounded-lg shadow-md flex-1'>
            <div className="flex items-center justify-center w-12 h-12 bg-[#f4f4f4] rounded-full shrink-0">
                <Icon className="text-black" size={22} strokeWidth={1.5} />
            </div>
            
            <div className="text-center">
                <h3 className='font-bold text-white text-lg mb-2'>{title}</h3>
                <p className='text-gray-300 text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default StepCards;