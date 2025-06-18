'use client'
import { gsap } from '../lib/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React,{ useEffect } from 'react'
import Hero from '../pages/Hero';
import SecondSection from '@/pages/second-section';
import ThirdSection from '@/pages/Third-Section';
import LastSection from '@/pages/last-section';



export default function Home() {
  //  useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.create({
  //     trigger: ".third-section",
  //     start: "top top", 
  //     end: "bottom top",
  //     pin: true,
  //     scrub: 1,
  //     onUpdate: (self) => {
  //       const lastSection = document.querySelector('.last-section');
  //       if (self.progress > 0.95) {
  //         lastSection.style.transform = `translateY(${(1 - self.progress) * 100}vh)`;
  //       }
  //     }
  //   });

  //   return () => ScrollTrigger.getAll().forEach(st => st.kill());
  // }, []);

  return (
<>
<Hero />
<SecondSection />
<ThirdSection/>
<LastSection/>
  </>  
  );
}
