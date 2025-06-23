'use client'
import React,{ useState } from 'react';
import Image from 'next/image'
import Cursor from '@/component/cursor';
import { Globe, CalendarDays } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>

      <div className="relative max-h-screen bg-gradient-to-br from-amber-600 to-red-600 overflow-hidden">
        <div className="relative bg-black opacity-88">
          <Cursor isHovered={isHovered}/>
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-34 h-44 lg:w-74 lg:h-65">
             <Image 
                src='/images/image 2.png'
                alt='planet'
                width={320}
                height={50}
                className="object-contain "
             />
            </div>
            
            <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/images/mastercard-banner.png"
                  alt="businessman"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
          </div>

          {/* Header Navigation */}
          <header className="relative z-10 px-4 md:px-8 py-4 md:py-6">
            {/* Mobile Header */}
            <div className="flex md:hidden items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/Group 3693.png"
                  alt="mastercard"
                  width={25}
                  height={25}
                  className="object-cover"
                />
                <div className='border-l border-white h-5'/>
                <span className="text-white font-medium text-sm">SAFETY AND SECURITY</span>
              </div>
              
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/Group 3693.png"
                    alt="mastercard"
                    width={30}
                    height={30}
                    className="object-cover object-right"
                  />
                  <div className='border-l border-white h-6'/>
                  <span className="text-white font-medium ml-4">SAFETY AND SECURITY</span>
                </div>
              </div>
              
              <nav className="flex items-center space-x-8 text-white/80 text-sm">
                <a href="#" className="hover:text-white transition-colors">Executive Summary</a>
                <a href="#" className="hover:text-white transition-colors">Key Topics</a>
                <a href="#" className="hover:text-white transition-colors">Key Opportunities +</a>
              </nav>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-colors">
                  <span><Globe /></span>
                  <span>Country</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-colors">
                  <span><CalendarDays/></span>
                  <span>Oct '23 - Mar '24</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="relative z-10 px-4 md:px-8 py-8 md:py-16 max-w-7xl mx-auto">
            <div className="max-w-2xl">
               <p 
                className="text-white text-sm md:text-lg mb-4 md:mb-8 tracking-wide"
                style={{ 
                  isolation: 'isolate',
                  zIndex: 100 
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                SAFETY AND SECURITY
              </p>
    
              <h1 
              style={{ 
                  isolation: 'isolate',
                  zIndex: 100 
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              className="text-3xl md:text-6xl font-extrabold text-yellow-400 leading-tight mb-4 md:mb-8 z-20">
              Social Intelligence<br />
              Report 2024
              </h1>
              
              <p 
              style={{ 
                  isolation: 'isolate',
                  zIndex: 100 
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} className="text-white text-lg md:text-xl mb-8 md:mb-12 font-light">
                Singapore | OCT 2023 - MAR 2024
              </p>
              
              <button className="inline-flex items-start md:items-center flex-col md:flex-row px-4 md:px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg transition-colors shadow-lg w-full md:w-auto">
                <div className="flex items-center mb-2 md:mb-0 md:mr-4">
                  <div className="flex items-center justify-center mr-3">
                     <div className="relative flex items-center justify-center mr-3">
                      <Image
                        src="/images/Group 4020.png"
                        alt="badge"
                        width={100}
                        height={100}
                        className="object-cover md:w-[70px] md:h-[70px]"
                      />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[7px] md:text-[11px] font-bold text-white">NEW REPORT PAGE</span>
                    </div>
                  </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/80 mb-2">2024 Report</div>
                     <div className="text-sm leading-tight">
                        Find out the current social trend that affecting this<br className="hidden md:block" />
                        quarter of Safety And Security.
                        </div>
                  </div>
                </div>
               
              </button>
            </div>
          </main>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;