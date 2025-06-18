'use client'
import { gsap } from '../lib/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React,{ useEffect } from 'react'
import Hero from '../pages/Hero';
import SecondSection from '@/pages/second-section';
import ThirdSection from '@/pages/Third-Section';
import LastSection from '@/pages/last-section';

export default function Home() {
  return (
<>
<Hero />
<SecondSection />
{/* <ThirdSection/> */}
<LastSection/>
  </>  
  );
}
