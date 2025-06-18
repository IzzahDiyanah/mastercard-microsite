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
                trigger: ".container",
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
             <div className="bg-gradient-to-bl from-amber-900 to-black container w-[200%] h-screen flex flex-nowrap" style={{ overscrollBehavior: 'none', heigh: '100vh', width: '400vh' }}>
                <section className="panel w-screen h-full flex-shrink-0">
                   <KeyTopics />
                </section>

                <section className="panel w-screen h-full flex-shrink-0">
                   <Categories />
                </section>
            </div>
        </>
    );
};

export default LastSection;