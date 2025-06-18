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
            {/* Global styles to prevent overflow */}
            <style jsx global>{`
                body {
                    overscroll-behavior: none;
                    overflow-x: hidden;
                }
            `}</style>
            
            <div 
                className="container h-screen flex flex-nowrap overflow-hidden" style={{overscrollBehavior: 'none',width: '300vh', overflowX: 'hidden'}}
            >
                <section className="panel flex-shrink-0" style={{width: '100vw', height: '100vh'}}>
                   <ResearchFirst />
                </section>

                <section className="panel flex-shrink-0" style={{ width: '100vw', height: '100vh' }}>
                   <ResearchSecond />
                </section>

                <section className="panel flex-shrink-0" style={{ width: '100vw', height: '100vh' }}>
                   <ResearchThird />
                </section> 
            </div>
        </>
    );
};

export default ThirdSection;