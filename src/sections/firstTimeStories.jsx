import React, { useRef, useState } from 'react';
import { motion } from "motion/react";
import SectionHeader from '../components/SectionHeader';
import { stories } from '/data/content';

const FirstTimerStories = () => {

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const cardWidth =
            container.firstChild.offsetWidth + 24;

        const index = Math.round(
            container.scrollLeft / cardWidth
        );

        setActiveIndex(index);
    };

    return (
        <section className="bg-black text-center py-8 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                >
                    <SectionHeader>
                        FIRST-TIMER{" "}
                        <span className="text-[#FF5722]">
                            STORIES
                        </span>
                    </SectionHeader>
                </motion.div>

                {/* Reviews */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="
                    flex
                    gap-6
                    mt-10
                    overflow-x-scroll
                    overflow-y-hidden
                    snap-x
                    snap-mandatory
                    [scrollbar-width:none]
                    [-ms-overflow-style:none]
                    [&::-webkit-scrollbar]:hidden
                    "
                >

                    {stories.map((story, idx) => (

                        <motion.div
                            key={idx}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: .7,
                                delay: idx * .2
                            }}
                            className="
                            flex-none
                            w-[85vw]
                            md:w-[calc(50%-12px)]
                            snap-center
                            bg-[#1c1c1c]
                            p-8
                            rounded-xl
                            border
                            border-[#353535]
                            flex
                            flex-col
                            h-[320px]
                            "
                        >

                            {/* Text area */}
                            <div
                                className="
                                flex-1
                                overflow-y-auto
                                overflow-x-hidden
                                pr-2
                                [scrollbar-width:none]
                                [-ms-overflow-style:none]
                                [&::-webkit-scrollbar]:hidden
                                "
                            >

                                <div className="text-[#FF5722] text-4xl mb-4">
                                    ❝
                                </div>

                                <p className="text-gray-300 italic text-lg leading-relaxed">
                                    "{story.text}"
                                </p>

                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between border-t border-[#333] pt-4 mt-6">

                                <div className="flex items-center gap-4">

                                    <img
                                        src={story.avatar}
                                        alt={story.name}
                                        className="w-12 h-12 rounded-full object-cover border border-[#FF5722]"
                                    />

                                    <p className="text-white font-bold text-lg">
                                        {story.name}
                                    </p>

                                </div>

                                <div className="text-[#FF5722] text-lg">
                                    {"★".repeat(story.rating)}
                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">

                    {stories.map((_, idx) => (

                        <button
                            key={idx}
                            onClick={() => {

                                scrollRef.current?.children[idx]
                                .scrollIntoView({
                                    behavior: "smooth",
                                    inline: "center"
                                });

                                setActiveIndex(idx);

                            }}
                            className={`
                            rounded-full
                            transition-all duration-300
                            ${
                                activeIndex === idx
                                ? "w-8 h-3 bg-[#FF5722]"
                                : "w-3 h-3 bg-gray-600"
                            }
                            `}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
};

export default FirstTimerStories;