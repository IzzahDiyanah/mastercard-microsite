'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useCursorInteractions } from '@/hooks/cursorInteractions';
import { CountUp } from 'countup.js';

const ThirdApp = () => {
  const { cardHover } = useCursorInteractions();
 const countRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Reset the display and start CountUp every time component comes into view
          if (countRef.current) {
            countRef.current.innerHTML = '0k'; // Reset to starting value
          }

          const countUp = new CountUp(countRef.current, 6.7, {
            duration: 2.5,
            decimalPlaces: 1,
            suffix: 'k',
            useEasing: true,
            useGrouping: false,
          });
 

          if (!countUp.error) {
            countUp.start();
            // setHasAnimated(true);
          } else {
            console.error(countUp.error);
          }
        }
      },
      {
        threshold: 0.8, // Trigger when 80% of the component is visible
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  },);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[rgb(247,158,27)] flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 w-full max-w-7xl">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4 md:space-y-8 w-full lg:w-auto">
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black text-center lg:text-left max-w-lg" {...cardHover()}>
            Data Volume
          </h1>
          <img 
            src="/images/Data-Volume.png" 
            alt="Data Volume Visualization" 
            className="w-full max-w-xl h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col text-black space-y-8 md:space-y-28 w-full lg:flex-1">
          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center lg:text-left" {...cardHover()}>
            Consumer conversations were measured in volume of mentions
          </p>
          
          <div className="mt-[-15px] md:mt-[-30px]">
            <img 
              src="/images/dotted-line.png" 
              alt="Dotted line separator" 
              className="w-full max-w-xl h-auto mx-auto lg:mx-0"
            />
          </div>
          
          <div className="space-y-2 md:space-y-4 text-center lg:text-left">
            <p 
              ref={countRef}
              className="font-extrabold text-8xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[200px] 2xl:text-[200px] mb-[-5px] sm:mb-[-30px] md:mb-[-50px] lg:mb-[-70px] xl:mb-[-10px]" 
              {...cardHover()}
            >
              6.7k
            </p>
            <p className="font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px]" {...cardHover()}>
              mentions
            </p>
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0" {...cardHover()}>
              about digital payment safety and security were gathered for cards and non-card services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdApp;