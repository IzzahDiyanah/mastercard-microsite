'use client'
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ThirdApp = () => {
  const container = useRef(null);

  return (

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
  );
}

export default ThirdApp;