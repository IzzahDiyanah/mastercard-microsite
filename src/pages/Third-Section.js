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

        let sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=200",
                markers:true
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>  
             <div className="container w-[200%] h-screen flex flex-nowrap" style={{ overscrollBehavior: 'none', height:'100vh', width:'400vh' }}>
                <section className="panel w-screen h-full flex-shrink-0">
                   <ResearchFirst />
                </section>

                <section className="panel w-screen h-full flex-shrink-0">
                   <ResearchSecond />
                </section>

                <section className="panel w-screen h-full flex-shrink-0">
                   <ResearchThird />
                </section> 
            </div>
        </>
    );
};

export default ThirdSection;