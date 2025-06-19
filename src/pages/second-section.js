import Image from "next/image";
import { gsap } from '../lib/gsap';

const SecondSection = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:pt-8 lg:pt-20 md:pl-8 lg:pl-20 md:pr-0 pb-10 md:pb-20 overflow-hidden">
      <main className="flex flex-col gap-6 md:gap-8 lg:gap-8 items-center sm:items-start">
        {/* Header Section */}
        <div className="w-full">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-400">
              What's New?
            </h2>
            <p className="max-w-2xl text-sm md:text-base lg:text-lg text-white">
              As our safety and security report continues to evolve, we are excited to announce
              several significant enhancements, as compared to the reports from 2023.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:overflow-x-auto md:pb-4 md:pr-4 md:pl-4 scrollbar-hide">
          {/* Card Component */}
          {[
            {
              icon: "/images/Cybersecurity.png",
              alt: "Cybersecurity",
              title: "Cybersecurity section offers insights on cyber threats and effective safety measures:",
              description: "This section offers issuers an understanding of cyber threats, allowing them to reduce risks and strategically plan for enhanced security measures. Mastercard Insight Platform is used as a source to provide issuers with information like the total number of attacks, type of attacks etc."
            },
            {
              icon: "/images/Analysis.png",
              alt: "Analysis",
              title: "Analysis time period extended from 3 to 6 months:",
              description: "An extended analysis time period allows us a more comprehensive understanding of trends, allowing long-term pattern analysis rather than solely focusing on short-term fluctuations. Further, extended time ensures that there are less chances of repeated scams being discussed."
            },
            {
              icon: "/images/Restructured.png",
              alt: "Restructured",
              title: "Restructured content to minimise of scams:",
              description: "We've restructured the project to concentrate on bank cards and non-bank card aspects to reduce the possibility of repetition of scams across sections."
            }
          ].map((card, index) => (
            <div key={index} className="flex flex-col w-full md:w-[80vw] lg:w-[764px] md:flex-shrink-0">
              {/* NEW Badge */}
              <div className="w-24 sm:w-28 md:w-36 h-10 sm:h-12 md:h-15 bg-amber-600 flex justify-center items-center rounded-b-3xl font-extrabold text-xl sm:text-2xl md:text-3xl text-white relative left-3/5 md:left-3/4 top-9 md:top-12 z-10">
                <p>NEW</p>
              </div>

              {/* Card Content */}
              <div className="rounded-2xl md:rounded-4xl w-full min-h-80 md:h-[427px] bg-gradient-to-br from-amber-900 to-black-900 outline outline-orange-400 p-6 md:p-10">
                <div className="flex flex-col gap-3 md:gap-5">
                  <div className="w-16 md:w-20">
                    <img src={card.icon} alt={card.alt} className="w-full h-auto" />
                  </div>
                  <h3 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white leading-tight md:leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-normal text-sm md:text-base lg:text-xl text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Section */}
        <div className="w-full flex justify-center">   
          <div className="w-12">
            <img src="/images/arrow-down.png" alt="Arrow" className="w-full h-auto" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SecondSection;