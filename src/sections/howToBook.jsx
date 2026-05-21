import SectionHeader from "../components/sectionHeader";
import StepCards from "../components/stepCards";
import { UserRound, Dumbbell, Bike } from 'lucide-react'; // Import your icons

const HowToBook = () => {
  return (
    <div className="bg-black w-full text-center py-8 px-4">
        <SectionHeader>HOW TO <span className="text-[#FF5722]">BOOK</span></SectionHeader>

        <div className="flex flex-col md:flex-row gap-4 mt-8 max-w-6xl mx-auto items-stretch">
            <StepCards 
                icon={UserRound} 
                title="Create Your Account" 
                description="Sign up in seconds and unlock access to all classes and schedules." 
            />
            <StepCards 
                icon={Dumbbell} 
                title="Choose Your Class" 
                description="Browse available sessions and pick a time that fits your schedule." 
            />
            <StepCards 
                icon={Bike} 
                title="Show Up & Ride" 
                description="Arrive early, get set up, and enjoy your first high-energy experience." 
            />
        </div>
    </div>
  )
}

export default HowToBook;