import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { stories } from '/data/content';

const FirstTimerStories = () => {
    return (
        <section className="bg-black text-center py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionHeader >
                    FIRST-TIMER <span className="text-[#FF5722]">STORIES</span>
                </SectionHeader>

                <div className="flex gap-6 mt-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                    {stories.map((story, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[85vw] md:w-[calc(50%-12px)] snap-center bg-[#1c1c1c] p-8 rounded-xl border border-[#353535] flex flex-col justify-between min-h-75">

                            <div className="h-40 overflow-y-auto scrollbar-hide pr-2">
                                <div className="text-[#FF5722] text-4xl mb-4">❝</div>
                                <p className="text-gray-300 italic text-lg leading-relaxed">"{story.text}"</p>
                            </div>

                            <div className="flex items-center justify-between border-t border-[#333] pt-4 mt-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={story.avatar}
                                        alt={story.name}
                                        className="w-12 h-12 rounded-full object-cover border border-[#FF5722]"
                                    />
                                    <p className="text-white font-bold text-lg">{story.name}</p>
                                </div>
                                <div className="text-[#FF5722] text-lg">
                                    {'★'.repeat(story.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstTimerStories;