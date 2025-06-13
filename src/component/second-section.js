import Image from "next/image";
import { gsap } from '../lib/gsap';

const SecondSection = () => {
  return (
    <div className="min-h-screen p-4 md:pt-8 lg:pt-20 md:pl-8 lg:pl-20 md:pr-0 lg:pr-0 pb-10 md:pb-20 overflow-hidden">
      <main className="flex flex-col gap-6 md:gap-8 lg:gap-[32px] items-center sm:items-start">
        <div className="w-full">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[rgb(247,158,27)]">
              What's New?
            </h2>
            <p className="max-w-2xl text-sm md:text-base lg:text-lg">
              As our safety and security report continues to evolve, we are excited to announce
              several significant enhancements, as compared to the reports from 2023.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:overflow-x-auto md:pb-4 md:pr-4 md:pl-4 scrollbar-hide">
          <div className="flex flex-col w-full md:w-[80vw] lg:w-[763.5px] md:flex-shrink-0">
            <div className="w-[100px] sm:w-[120px] md:w-[140px] h-[40px] sm:h-[50px] md:h-[59px] bg-[rgb(255,95,0)] flex justify-center items-center rounded-b-3xl font-extrabold text-xl sm:text-2xl md:text-[28px] relative left-[60%] sm:left-[65%] md:left-[70%] lg:left-[73%] top-9 md:top-12 z-10">
              <p>NEW</p>
            </div>

            <div className="rounded-2xl md:rounded-[38px] w-full h-auto min-h-[300px] md:h-[427px] bg-[radial-gradient(ellipse_at_top_left,#FF5F00_0%,#DE5504_0%,#1C1C1C_100%)] outline-[rgb(247,158,27)] outline p-6 md:p-10">
              <div className="flex flex-col gap-3 md:gap-5">
                <div className="w-[15%] md:w-[10%]">
                  <img src="/assets/Cybersecurity.png" alt="Cybersecurity" className="w-full h-auto" />
                </div>
                <h3 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight md:leading-[46.4px]">
                  Cybersecurity section offers insights on cyber threats and effective safety measures:
                </h3>
                <p className="font-normal text-sm md:text-base lg:text-[20px]">
                  This section offers issuers an understanding of cyber threats, allowing them to reduce risks and strategically plan for enhanced security measures. Mastercard Insight Platform is used as a source to provide issuers with information like the total number of attacks, type of attacks etc.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[80vw] lg:w-[763.5px] md:flex-shrink-0">
            <div className="w-[100px] sm:w-[120px] md:w-[140px] h-[40px] sm:h-[50px] md:h-[59px] bg-[rgb(255,95,0)] flex justify-center items-center rounded-b-3xl font-extrabold text-xl sm:text-2xl md:text-[28px] relative left-[60%] sm:left-[65%] md:left-[70%] lg:left-[73%] top-9 md:top-12 z-10">
              <p>NEW</p>
            </div>

            <div className="rounded-2xl md:rounded-[38px] w-full h-auto min-h-[300px] md:h-[427px] bg-[radial-gradient(ellipse_at_top_left,#FF5F00_0%,#DE5504_0%,#1C1C1C_100%)] outline-[rgb(247,158,27)] outline p-6 md:p-10">
              <div className="flex flex-col gap-3 md:gap-5">
                <div className="w-[15%] md:w-[10%]">
                  <img src="/assets/Analysis.png" alt="Analysis" className="w-full h-auto" />
                </div>
                <h3 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight md:leading-[46.4px]">
                  Analysis time period extended from 3 to 6 months:
                </h3>
                <p className="font-normal text-sm md:text-base lg:text-[20px]">
                  An extended analysis time period allows us a more comprehensive understanding of trends, allowing long-term pattern analysis rather than solely focusing on short-term fluctuations. Further, extended time ensures that there are less chances of repeated scams being discussed.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[80vw] lg:w-[763.5px] md:flex-shrink-0">
            <div className="w-[100px] sm:w-[120px] md:w-[140px] h-[40px] sm:h-[50px] md:h-[59px] bg-[rgb(255,95,0)] flex justify-center items-center rounded-b-3xl font-extrabold text-xl sm:text-2xl md:text-[28px] relative left-[60%] sm:left-[65%] md:left-[70%] lg:left-[73%] top-9 md:top-12 z-10">
              <p>NEW</p>
            </div>

            <div className="rounded-2xl md:rounded-[38px] w-full h-auto min-h-[300px] md:h-[427px] bg-[radial-gradient(ellipse_at_top_left,#FF5F00_0%,#DE5504_0%,#1C1C1C_100%)] outline-[rgb(247,158,27)] outline p-6 md:p-10">
              <div className="flex flex-col gap-3 md:gap-5">
                <div className="w-[15%] md:w-[10%]">
                  <img src="/assets/Restructured.png" alt="Restructured" className="w-full h-auto" />
                </div>
                <h3 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight md:leading-[46.4px]">
                  Restructured content to minimise of scams:
                </h3>
                <p className="font-normal text-sm md:text-base lg:text-[20px]">
                  We've restructured the project to concentrate on bank cards and non-bank card aspects to reduce the possibility of repetition of scams across sections.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">   
            <div className="w-[5%] flex justify-center">
                <img src="/assets/arrow-down.png" alt="Arrow" className="w-full h-auto" />
            </div>
        </div>
      </main>
    </div>
  );
}

export default SecondSection;
