import SectionHeader from "../components/sectionHeader";
import Button from "../components/button";

const CtaSection = () => {
  return (
    <section className="bg-black py-20 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <SectionHeader size="4"> READY TO START YOUR FIRST <span className="text-[#FF5722]">RIDE</span></SectionHeader>
        <p className="text-white text-lg md:text-xl">
          Book your first session today and experience the energy for yourself.
        </p>
        <Button className="mt-6 px-5 py-2.5" text="Book Now" />
      </div>
    </section>
  );
};

export default CtaSection;