import { useCursorInteractions } from '@/hooks/cursorInteractions';

const FirstApp = () => {
  const { cardHover } = useCursorInteractions();

  return (
    <div 
    className="w-full h-screen bg-cover flex items-center p-4 sm:p-8 lg:p-16"
    style={{ 
      backgroundImage: "url('/images/Research Approach.png')",
      backgroundPosition: '70% center', // Adjust the 25% to move left more or less
      '@media (minWidth: 768px)': {
        backgroundPosition: 'center center'
      }
    }}
    >
      <div className="flex-1 pr-0 sm:pr-8 lg:pr-16 max-w-full sm:max-w-md md:max-w-lg space-y-4 sm:space-y-6 md:space-y-10 justify-">
          {/* Content at the top for mobile */}
          <div className="order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-amber-500 leading-tight" {...cardHover()}>
              Research Approach
            </h1>
          </div>
          
          {/* Arrow - changes direction based on screen size */}
          <div className="order-2 mt-4 sm:mt-6 md:mt-8 flex justify-center sm:block sm:w-40 sm:w-60 md:w-80 h-auto">            
            {/* Desktop - right arrow */}
            <img
              src='/images/right-arrow.png'
              alt='arrow right'
              className="object-cover w-full h-full hidden sm:block"
            />
          </div>
        </div>
    </div>
  );
}

export default FirstApp;