'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useCursorInteractions } from '@/hooks/cursorInteractions';

const KeyTopicsComponent = () => {
  const { cardHover } = useCursorInteractions(); 
  const marqueeRef = useRef(null);
  const marqueeRef2 = useRef(null);
  const mobileMarqueeRef = useRef(null);
  const mobileMarqueeRef2 = useRef(null);

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
    // Desktop GSAP animations
    const marqueeElement = marqueeRef.current;
    const marqueeElement2 = marqueeRef2.current;
    
    if (marqueeElement && marqueeElement2 && window.innerWidth >= 768) {
      const totalHeight = marqueeElement.scrollHeight / 3;
      const totalHeight2 = marqueeElement2.scrollHeight / 3;
      
      // First marquee (moving up)
      const tl1 = gsap.timeline({ repeat: -1 });
      tl1.set(marqueeElement, { y: 0 })
         .to(marqueeElement, {
           y: -totalHeight,
           duration: 10,
           ease: "none",
         });

      // Second marquee (moving down)
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
    }

    // Mobile GSAP animations
    const mobileMarqueeElement = mobileMarqueeRef.current;
    const mobileMarqueeElement2 = mobileMarqueeRef2.current;
    
    if (mobileMarqueeElement && mobileMarqueeElement2 && window.innerWidth < 768) {
      const totalHeight = mobileMarqueeElement.scrollHeight / 3;
      const totalHeight2 = mobileMarqueeElement2.scrollHeight / 3;
      
      // First mobile marquee (moving up)
      const mobileTl1 = gsap.timeline({ repeat: -1 });
      mobileTl1.set(mobileMarqueeElement, { y: 0 })
              .to(mobileMarqueeElement, {
                y: -totalHeight,
                duration: 8,
                ease: "none",
              });

      // Second mobile marquee (moving down)
      const mobileTl2 = gsap.timeline({ repeat: -1 });
      mobileTl2.set(mobileMarqueeElement2, { y: -totalHeight2 })
              .to(mobileMarqueeElement2, {
                y: 0,
                duration: 8,
                ease: "none",
              });

      return () => {
        mobileTl1.kill();
        mobileTl2.kill();
      };
    }
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div className="min-h-screen hidden md:flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <div className="flex-1 pr-16">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-amber-500 leading-tight" {...cardHover()}>
              Key Topics
            </h1>
            
            {/* Arrow */}
            <div className="mt-8 w-80 h-70">
             <img
                src='/images/right-arrow.png'
                alt='arrow right'
                className="object-cover"
              />
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
                  {...cardHover()}
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
                    {...cardHover()}
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

      {/* Mobile View */}
      <div className="min-h-screen md:hidden flex flex-col">
        <div className="flex-none px-6 py-8 text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-amber-500 leading-tight">
            Key Topics
          </h1>
          
          <div className="mt-6 flex justify-center">
            <div className="w-12 h-12">
              <img
                src='/images/arrow-down.png'
                alt='arrow down'
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <div className="h-[30vh] grid grid-cols-2 gap-8 px-4">
            
            <div className="h-full flex items-center justify-center">
              <div 
                ref={mobileMarqueeRef}
                className="flex flex-col gap-12"
              >
                {duplicatedImages.map((image, index) => (
                  <div
                    key={`mobile-${image.id}-${index}`}
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
            
            <div className="h-full flex items-center justify-center">
              <div 
                ref={mobileMarqueeRef2}
                className="flex flex-col gap-12"
              >
                {duplicatedImages2.map((image, index) => (
                  <div
                    key={`mobile-second-${image.id}-${index}`}
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
    </>
  );
};

export default KeyTopicsComponent;