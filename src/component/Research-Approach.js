'use client'
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ResearchApp = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");
    
    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: "+=3500",
        }
      });
    }, container);

    return () => ctx.revert(); 
  }, []);

  return (
    <div id="container"  className="min-h-screen flex">
      <main className="flex overflow-hidden md:overflow-x-auto scrollbar-hide">
        <div className="panel w-full min-w-screen h-screen bg-cover bg-center bg-no-repeat flex" 
          style={{ backgroundImage: "url('/images/Research Approach.png')" }}>
          <div className="w-full h-full p-4 md:p-8 lg:p-15 flex items-center">
            <div className="w-full md:w-1/2 lg:w-[10%] flex flex-col gap-4 md:gap-10 lg:gap-20">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[150px] leading-tight md:leading-snug lg:leading-[160px] text-[rgb(247,158,27)]">
                Research Approach
              </h1>
              <div className="w-full md:w-[150%] lg:w-[235%]">
                <img src="/images/right-arrow.png" alt="Right-arrow" className="w-full h-full object-contain"/>
              </div>
            </div>
          </div>
        </div>
        
        <section className="panel min-w-screen h-screen flex items-center justify-center">
      
          <div className="flex h-full w-full">
            <div className="flex flex-col w-[60%] h-full">
              <div className="h-[50%] bg-gradient-to-b from-[#7e350b] to-[#441c06] p-10">
                <p className="font-normal text-[45px] leading-[50px] w-[500px]">Online conversations on Safety and Security</p>
                  <div className="pt-10">
                      <div className="flex item-center justify-start gap-30">
                        <img src="/images/FB.png" alt="Data-volume" className="w-[12%] h-[12%]"/>
                        <img src="/images/Forum.png" alt="Data-volume" className="w-[12%] h-[12%]"/>
                        <img src="/images/X.png" alt="Data-volume" className="w-[9%] h-[9%]"/>
                        <img src="/images/Reddit.png" alt="Data-volume" className="w-[12%] h-[12%]"/>
                      </div>
                      <div className="flex item-center justify-start gap-28 ml-30 -mt-10">
                        <img src="/images/Blogs.png" alt="Data-volume" className="w-[13%] h-[13%]"/>
                        <img src="/images/Instagram.png" alt="Data-volume" className="w-[13%] h-[13%]"/>
                        <img src="/images/News.png" alt="Data-volume" className="w-[13%] h-[13%]"/>
                      </div>
                   </div>
              </div>
              <div className="w-[100px] sm:w-[120px] md:w-[140px] h-[40px] sm:h-[50px] md:h-[59px] bg-white text-[rgb(255,95,0)] flex justify-center items-center rounded-b-3xl font-extrabold text-xl sm:text-2xl md:text-[28px] relative left-[60%] sm:left-[65%] md:left-[80%] lg:left-[75s%] top-9 md:top-14 z-10 -mt-14">
              <p>NEW</p>
            </div>
              <div className="h-[50%] bg-gradient-to-b from-[#F79E1B] to-[#FF5F00] p-10 flex items-center justify-items-center">

                  <div className="flex flex-col gap-13">
                      <div className="flex items-center justify-start gap-10">
                        <img src="/images/mastercard-insights.png" alt="Data-volume" className="w-[17%] h-[17%]"/>
                        <h1 className="font-extrabold text-[45.32px] text-[rgb(28,28,28)]">Mastercard Cyber Insights</h1>
                      </div>
                      <div className="font-medium text-[26.24px] leading-[46px] text-[rgb(28,28,28)] w-[700px]">
                        <p>Strategic cyber threat landscape assessment and analysis Identification of cyber threat trends per region, industry, segment and business assets.</p>
                      </div>

                  </div>
              </div>
            </div>
            <div className="w-[40%] h-full ">
              <img src="/images/mastercard-online.png" alt="Data-volume" className="w-full h-full"/>
            </div>
          </div>
        </section>
        
        <section className="panel min-w-screen h-screen bg-[rgb(247,158,27)] flex items-center justify-center">
          <div className="flex pr-[5%] pl-[5%] gap-25">
              <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="font-extrabold text-[150px] text-black leading-[160px]">Data Volume</h1>
                <div>
                  <img src="/images/Data-Volume.png" alt="Data-volume" className="w-full h-full"/>
                </div>
              </div>
              <div className="flex flex-col text-black">
                <p className="font-medium text-[45px] leading-[50px]">Consumer conversations were measured in volume of mentions</p>
                <div className="border-dashed border border-black mb-80" ></div>
                <p className="font-extrabold text-[200px] leading-[100px]">6.7k</p>
                <p className="font-extrabold text-[80px] leading-[100px]">mentions</p>
                <p className="font-medium text-[24px] leading-[34px]">about digital payment safety and security were gathered for cards and non-card services</p>
              </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default ResearchApp;