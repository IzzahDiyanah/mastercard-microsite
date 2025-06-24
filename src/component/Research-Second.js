import { useCursorInteractions } from '@/hooks/cursorInteractions';

const SecondApp = () => {
  const { cardHover } = useCursorInteractions();

  const socialIcons = [
    { src: "/images/FB.png", alt: "Facebook" },
    { src: "/images/Forum.png", alt: "Forum" },
    { src: "/images/X.png", alt: "X (Twitter)" },
    { src: "/images/Reddit.png", alt: "Reddit" },
    { src: "/images/Blogs.png", alt: "Blogs" },
    { src: "/images/Instagram.png", alt: "Instagram" },
    { src: "/images/News.png", alt: "News" }
  ];

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* Left Content */}
      <div className="w-full lg:w-3/5 flex flex-col">
        {/* Top Section */}
        <div className="h-auto lg:h-1/2 bg-gradient-to-bl from-amber-900 to-black p-6 md:p-12 lg:p-23 text-white relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 lg:mb-8 max-w-xl text-white" {...cardHover()}>
            Online conversations on Safety and Security
          </h2>

          {/* Social Icons Grid - Responsive Version - Simpler 3-col mobile approach */}
            <div className="flex flex-col items-center mt-8 lg:mt-0">
              {/* Mobile: 3 columns for all icons */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl md:hidden" {...cardHover()}>
                {socialIcons.map((icon, index) => (
                  <img 
                    key={index} 
                    src={icon.src} 
                    alt={icon.alt} 
                    className="w-full h-auto max-w-[80px]" 
                  />
                ))}
              </div>
              
              {/* Desktop: Original layout */}
              <div className="hidden md:block">
                {/* Top Row - 4 icons */}
                <div className="grid grid-cols-4 gap-16 lg:gap-36 max-w-4xl mb-4" {...cardHover()}>
                  {socialIcons.slice(0, 4).map((icon, index) => (
                    <img 
                      key={index} 
                      src={icon.src} 
                      alt={icon.alt} 
                      className="w-full h-auto max-w-[100px] lg:max-w-none" 
                    />
                  ))}
                </div>
                
                {/* Bottom Row - 3 icons centered */}
                <div className="flex justify-center w-full mt-4 lg:-mt-25">
                  <div className="grid grid-cols-3 gap-16 lg:gap-36 max-w-2xl" {...cardHover()}>
                    {socialIcons.slice(4).map((icon, index) => (
                      <img 
                        key={index} 
                        src={icon.src} 
                        alt={icon.alt} 
                        className="w-full h-auto max-w-[100px] lg:max-w-none" 
                      />
                    ))}
                  </div>
                  </div>
              </div>
            </div>
          
          {/* NEW Badge */}
          <div className="absolute -bottom-7.5 right-4 lg:-bottom-13 lg:right-15 w-20 h-8 lg:w-35 lg:h-14 bg-white text-orange-500 rounded-b-2xl lg:rounded-b-3xl flex items-center justify-center font-extrabold text-lg lg:text-2xl" {...cardHover()}>
            NEW
          </div>
        </div>

        {/* Bottom Section */}
        <div className="h-auto lg:h-1/2 bg-gradient-to-bl from-[#F79E1B] to-[#FF5F00] p-6 md:p-12 lg:p-23 flex items-center">
          <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
              <img 
                src="/images/mastercard-insights.png" 
                alt="Mastercard Insights" 
                className="w-[60px] h-auto md:w-[88.63px] md:h-[52.51px]" 
              />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center md:text-left" {...cardHover()}>
                Mastercard Cyber Insights
              </h1>
            </div>
            <div className="text-gray-900 leading-relaxed text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl" {...cardHover()}>
              <p>
                Strategic cyber threat landscape assessment and analysis. Identification of cyber threat trends per region, industry, segment and business assets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-2/5 order-first lg:order-last" {...cardHover()}>
        <img 
          src="/images/mastercard-online.png" 
          alt="Mastercard Online" 
          className="w-full h-auto lg:h-full object-cover max-h-[300px] lg:max-h-none" 
        />
      </div>
    </section>
  );
}

export default SecondApp;