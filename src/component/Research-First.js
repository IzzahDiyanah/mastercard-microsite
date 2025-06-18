'use client'
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FirstApp = () => {
  return (
    <div id="container"  className="min-h-screen">
      <main className="flex">
        <div className="panel w-full min-w-screen h-screen bg-cover bg-center bg-no-repeat flex" 
          style={{ backgroundImage: "url('/images/Research Approach.png')" }}>
          <div className="w-full h-full p-4 md:p-8 lg:p-15 flex items-center">
            <div className="w-full md:w-1/2 lg:w-[10%] flex flex-col gap-4 md:gap-10 lg:gap-20">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[150px] leading-tight md:leading-snug lg:leading-[160px] text-[rgb(247,158,27)]">
                Research Approach
              </h1>
              <div className="w-full md:w-[150%] lg:w-[235%]">
                <img src="/images/right-arrow.png" alt="Right-arrow" className="w-full h-full"/>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default FirstApp;