const SecondSwiper = () => {
    return (
      <section className="">
        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:pb-4 md:pr-4 md:pl-4">
          {/* Card Component */}
          {[
            {
              icon: "/images/Analysis.png",
              alt: "Analysis",
              title: "Analysis time period extended from 3 to 6 months:",
              description: "An extended analysis time period allows us a more comprehensive understanding of trends, allowing long-term pattern analysis rather than solely focusing on short-term fluctuations. Further, extended time ensures that there are less chances of repeated scams being discussed."
            },
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
      </section>
    );
  }
  
  export default SecondSwiper;