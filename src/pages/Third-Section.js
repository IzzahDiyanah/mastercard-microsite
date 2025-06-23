'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResearchFirst from '@/component/Research-First';
import ResearchSecond from '@/component/Research-Second';
import ResearchThird from '@/component/Research-Third';


const ThirdSection = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".panel2");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".desktop-container2",
                pin: true,
                scrub: 1,
                // snap: 1 / (sections.length - 1),
                end: "+=3500",
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            {/* Desktop View*/}
            <div className="desktop-container2 bg-gradient-to-bl from-amber-900 to-black h-screen md:flex flex-nowrap overflow-hidden hidden"
                 style={{ 
                     overscrollBehavior: 'none',
                     width: '200vw'
                 }}>
                <section className="panel2 w-screen h-full flex-shrink-0">
                    <ResearchFirst />
                </section>

                <section className="panel2 w-screen h-full flex-shrink-0">
                    <ResearchSecond />
                </section>

                <section className="panel2 w-screen h-full flex-shrink-0">
                    <ResearchThird />
                </section>
            </div>

            {/* Mobile View */}
            <div className="bg-gradient-to-bl from-amber-900 to-black md:hidden">
                <section className="w-full min-h-screen">
                    <ResearchFirst />
                </section>
                
                <section className="w-full min-h-screen">
                    <ResearchSecond />
                </section>

                <section className="w-full min-h-screen">
                    <ResearchThird/>
                </section>
            </div>
        </>
    );
};

export default ThirdSection;