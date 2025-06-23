const ThirdApp = () => {
  return (
    <section className="w-full min-h-screen bg-[rgb(247,158,27)] flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 w-full max-w-7xl">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4 md:space-y-8 w-full lg:w-auto">
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black text-center lg:text-left max-w-lg">
            Data Volume
          </h1>
          <img 
            src="/images/Data-Volume.png" 
            alt="Data Volume Visualization" 
            className="w-full max-w-xl h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col text-black space-y-8 md:space-y-28 w-full lg:flex-1">
          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">
            Consumer conversations were measured in volume of mentions
          </p>
          
          <div className="mt-[-15px] md:mt-[-30px]">
            <img 
              src="/images/dotted-line.png" 
              alt="Dotted line separator" 
              className="w-full max-w-xl h-auto mx-auto lg:mx-0"
            />
          </div>
          
          <div className="space-y-2 md:space-y-4 text-center lg:text-left">
            <p className="font-extrabold text-8xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[200px] 2xl:text-[200px] mb-[-10px] sm:mb-[-40px] md:mb-[-60px] lg:mb-[-80px] xl:mb-[-30px]">
              6.7k
            </p>
            <p className="font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px]">
              mentions
            </p>
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0">
              about digital payment safety and security were gathered for cards and non-card services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdApp;