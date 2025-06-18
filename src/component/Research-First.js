'use client'

const FirstApp = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center flex items-center p-8 lg:p-16" 
         style={{ backgroundImage: "url('/images/Research Approach.png')" }}>
      <div className="max-w-lg space-y-10">
        <h1 className="font-extrabold text-6xl lg:text-8xl xl:text-9xl leading-tight text-orange-500">
          Research Approach
        </h1>
        <div className="w-full">
          <img 
            src="/images/right-arrow.png" 
            alt="Right-arrow" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstApp;

