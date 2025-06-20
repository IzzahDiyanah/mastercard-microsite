'use client'

const FirstApp = () => {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center flex items-center p-4 sm:p-8 lg:p-16" 
      style={{ backgroundImage: "url('/images/Research Approach.png')" }}
    >
      <div className="flex-1 pr-0 sm:pr-8 lg:pr-16 max-w-full sm:max-w-md md:max-w-lg space-y-4 sm:space-y-6 md:space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-amber-500 leading-tight">
          Research Approach
        </h1>
        
        {/* Arrow */}
        <div className="mt-4 sm:mt-6 md:mt-8 w-40 sm:w-60 md:w-80 h-auto">
          <img
            src='/images/right-arrow.png'
            alt='arrow right'
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstApp;