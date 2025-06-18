'use client'
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SecondApp = () => {
  return (
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
    
  );
}

export default SecondApp;