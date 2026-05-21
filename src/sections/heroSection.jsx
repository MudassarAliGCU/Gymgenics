import Button from "../components/button"

const HeroSection = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden m-0 p-0">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url('/images/HeroSection-BG.jpg')] 
               bg-cover bg-top bg-no-repeat 
               grayscale contrast-90"
            />



            {/* Content Layer */}
            <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start">
                <span className="text-yellow-400 px-2 py-1 tracking-widest text-sm mb-4 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-full">
                    First Time?
                </span>
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase italic">
                    Your First <span className="text-orange-600">Ride</span> <br />
                    Starts Here
                </h1>
                <p className="text-gray-300 mt-4 max-w-md text-lg">
                    Everything you need to feel confident, prepared, and ready to go.
                </p>

                <Button className="mt-6 px-5 py-2.5" text="Book Now" />
            </div>
        </section>
    )
}

export default HeroSection
