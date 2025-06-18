const ThirdApp = () => {
  return (
    <section className="w-full h-screen bg-orange-400 flex items-center justify-center p-2">
      <div className="flex gap-20 max-w-7xl">
        {/* Left Section */}
        <div className="flex flex-col items-center space-y-10">
          <h1 className="font-extrabold text-8xl text-black text-center">
            Data Volume
          </h1>
          <img 
            src="/images/Data-Volume.png" 
            alt="Data Volume Visualization" 
            className="w-80 h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col text-black space-y-8 flex-1">
          <p className="font-medium text-3xl">
            Consumer conversations were measured in volume of mentions
          </p>
          
          <div className="border-dashed border-t-2 border-black"></div>
          
          <div className="space-y-4">
            <p className="font-extrabold text-8xl">6.7k</p>
            <p className="font-extrabold text-5xl">mentions</p>
            <p className="font-medium text-xl max-w-2xl">
              about digital payment safety and security were gathered for cards and non-card services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdApp;