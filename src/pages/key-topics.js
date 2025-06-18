'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { LuMoveRight } from "react-icons/lu";

const KeyTopicsComponent = () => {
  const marqueeRef = useRef(null);
  const marqueeRef2 = useRef(null);

  const images = [
    { id: 1, src: "/images/image-1.png", alt: "Woman with phone" },
    { id: 2, src: "/images/image-2.png", alt: "Man smiling" },
    { id: 3, src: "/images/image-3.png", alt: "Woman working" },
  ];

  const images2 = [
    { id: 4, src: "/images/image-4.png", alt: "Person with device" },
    { id: 5, src: "/images/image-5.png", alt: "Professional" },
    { id: 6, src: "/images/image-6.png", alt: "Business person" },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];
  const duplicatedImages2 = [...images2, ...images2, ...images2];

useEffect(() => {
  const marqueeElement = marqueeRef.current;
  const marqueeElement2 = marqueeRef2.current;
  
  if (!marqueeElement || !marqueeElement2) return;

  const totalHeight = marqueeElement.scrollHeight / 3;
  const totalHeight2 = marqueeElement2.scrollHeight / 3;
  
  //first marquee (moving up)
  const tl1 = gsap.timeline({ repeat: -1 });
  tl1.set(marqueeElement, { y: 0 })
     .to(marqueeElement, {
       y: -totalHeight,
       duration: 10,
       ease: "none",
     });

  //second marquee (moving down)
  const tl2 = gsap.timeline({ repeat: -1 });
  tl2.set(marqueeElement2, { y: -totalHeight2 })
     .to(marqueeElement2, {
       y: 0,
       duration: 10,
       ease: "none",
     });

  return () => {
    tl1.kill();
    tl2.kill();
  };
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-amber-900 to-black flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex-1 pr-16">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-amber-500 leading-tight">
            Key Topics
          </h1>
          
          {/* Arrow */}
          <div className="mt-8">
           <LuMoveRight className="text-white w-60 h-40" />
          </div>
        </div>

        {/* Right side - GSAP marquee */}
        <div className="flex-1 relative">
          <div className="relative h-screen overflow-hidden grid grid-cols-2 gap-12">
            
            {/* First marquee - moving up */}
            <div className="h-full flex items-center justify-center">
              <div 
                ref={marqueeRef}
                className="flex flex-col gap-24"
              >
                {duplicatedImages.map((image, index) => (
                  <div
                    key={`${image.id}-${index}`}
                    className="flex justify-center"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Second marquee - moving down */}
                <div className="flex-1 flex justify-center">
                <div 
                    ref={marqueeRef2}
                    className="flex flex-col gap-24"
                >
                    {duplicatedImages2.map((image, index) => (
                    <div
                        key={`second-${image.id}-${index}`}
                        className="flex justify-center"
                    >
                        <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover"
                        />
                    </div>
                    ))}
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTopicsComponent;