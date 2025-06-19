'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KeyTopics from '@/component/key-topics';
import Categories from '@/component/categories';

const LastSection = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

            let sections = gsap.utils.toArray(".panel");


                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".desktop-container",
                        pin: true,
                        scrub: 1,
                        end: () => `+=${sections.length * 1200}`,
                        invalidateOnRefresh: true,
                    }
                });

        // Cleanup function
        return () => {
            mm.revert();
        };
    }, []);

    return (
        <>
            {/* Desktop View*/}
            <div className="desktop-container bg-gradient-to-bl from-amber-900 to-black h-screen md:flex flex-nowrap overflow-hidden hidden"
                 style={{ 
                     overscrollBehavior: 'none',
                     width: '200vw'
                 }}>
                <section className="panel w-screen h-full flex-shrink-0">
                    <KeyTopics />
                </section>

                <section className="panel w-screen h-full flex-shrink-0">
                    <Categories />
                </section>
            </div>

            {/* Mobile View */}
            <div className="bg-gradient-to-bl from-amber-900 to-black md:hidden">
                <section className="w-full min-h-screen p-4">
                    <KeyTopics />
                </section>
                
                <section className="w-full min-h-screen p-4">
                    <Categories />
                </section>
            </div>
        </>
    );
};

export default LastSection;