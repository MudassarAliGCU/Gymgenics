import React from 'react';
import { motion } from "motion/react";
import SectionHeader from '../components/sectionHeader';
import { classes } from '/data/content.js';
import Button from '../components/button';

const UpcomingClasses = () => {

    const getSpotsStyles = (spots) => {
        if (spots >= 10) return "bg-[#1a3a2d] text-[#4ade80]";
        if (spots >= 5) return "bg-[#3d301b] text-[#fbbf24]";
        return "bg-[#3d1b1b] text-[#f87171]";
    };

    return (
        <section className="bg-black text-center py-8 px-4">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <SectionHeader theme="dark">
                    UPCOMING <span className="text-[#FF5722]">CLASSES</span>
                </SectionHeader>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">

                {classes.map((cls, idx) => (

                    <motion.div
                        key={idx}
                        initial={{
                            opacity: 0,
                            y: 60
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.7,
                            delay: idx * 0.2
                        }}
                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                        className="bg-[#1c1c1c] p-6 rounded-lg border border-[#353535] relative cursor-pointer"
                    >

                        {/* Spots badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                delay: idx * 0.3,
                                type: "spring"
                            }}
                            className={`absolute top-4 right-4 p-2 rounded-full text-xs font-bold ${getSpotsStyles(cls.spots)}`}
                        >
                            {cls.spots} spots left
                        </motion.div>

                        <h3 className="text-white font-bold text-xl">
                            {cls.name}
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            {cls.trainer}
                        </p>

                        <p className="text-[#FF5722] mb-6 mt-4 font-medium">
                            {cls.time} • {cls.duration}
                        </p>

                        <Button
                            className="mt-2 w-full bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors"
                            text="Book Now"
                        />

                    </motion.div>
                ))}

            </div>

        </section>
    );
};

export default UpcomingClasses;