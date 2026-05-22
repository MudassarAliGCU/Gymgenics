import React from 'react';
import SectionHeader from '../components/sectionHeader';
import { classes } from '/data/content.js';
import Button from '../components/button';

const UpcomingClasses = () => {
    // Helper to determine badge color based on remaining spots
    const getSpotsStyles = (spots) => {
        if (spots >= 10) return "bg-[#1a3a2d] text-[#4ade80]"; // Green
        if (spots >= 5) return "bg-[#3d301b] text-[#fbbf24]";  // Yellow/Orange
        return "bg-[#3d1b1b] text-[#f87171]";                // Red
    };
    
    return (
        <section className="bg-black text-center py-8 px-4">
            <SectionHeader theme="dark">UPCOMING <span className="text-[#FF5722]">CLASSES</span></SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                {classes.map((cls, idx) => (
                    <div key={idx} className="bg-[#1c1c1c] p-6 rounded-lg border border-[#353535] relative">
                        
                        <div className={`absolute top-4 right-4 p-2 rounded-full text-xs font-bold ${getSpotsStyles(cls.spots)}`}>
                            {cls.spots} spots left
                        </div>

                        <h3 className="text-white font-bold text-xl">{cls.name}</h3>
                        <p className="text-gray-400 text-sm mt-1">{cls.trainer}</p>
                        <p className="text-[#FF5722] mb-6 mt-4 font-medium">{cls.time} • {cls.duration}</p>
                        
                        <Button 
                            className="mt-2 w-full bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors" 
                            text="Book Now" 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpcomingClasses;