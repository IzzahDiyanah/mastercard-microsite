'use client';

import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    // Import GSAP for autoplay animation
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      
      const navItems = ['work', 'services', 'about', 'pricing'];
      let currentIndex = 0;
      
      // Get all navigation backgrounds
      const backgrounds = navItems.map(item => {
        const link = document.querySelector(`[wb-nav-link="${item}"]`);
        return link?.querySelector(".nav-link-bg");
      }).filter(Boolean);
      
      // Set initial state for all backgrounds
      backgrounds.forEach(bg => {
        gsap.set(bg, { xPercent: -101, opacity: 0 });
      });
      
      // Animation function
      const animateNext = () => {
        if (backgrounds.length === 0) return;
        
        const currentBg = backgrounds[currentIndex];
        
        // Animate current background in and out
        const tl = gsap.timeline();
        
        // Slide in from left
        tl.to(currentBg, {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        })
        // Stay visible for a moment
        .to(currentBg, {
          duration: 1.5
        })
        // Slide out to right
        .to(currentBg, {
          xPercent: 101,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
          onComplete: () => {
            // Reset position for next cycle
            gsap.set(currentBg, { xPercent: -101 });
            // Move to next item
            currentIndex = (currentIndex + 1) % navItems.length;
            // Continue the loop
            animateNext();
          }
        });
      };
      
      // Start the animation loop
      animateNext();
    };

    loadGSAP();
  }, []);

  const navItems = [
    { name: 'work', label: 'Work' },
    { name: 'services', label: 'Services' },
    { name: 'about', label: 'About' },
    { name: 'pricing', label: 'Pricing' }
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-2 py-2 shadow-lg">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name}`}
                wb-nav-link={item.name}
                className="relative px-6 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 overflow-hidden"
              >
                {/* Background element for GSAP animation */}
                <div className="nav-link-bg absolute inset-0 bg-red-400 rounded-full"></div>
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Header Section (no animation) */}
      <header className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-white mb-6">Welcome</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover amazing digital experiences with smooth animations and modern design
          </p>
        </div>
      </header>

      {/* Sections for scroll trigger */}
      <main>
        <section wb-section="work" className="min-h-screen bg-gray-800 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-red-400">Work</h1>
        </section>
        
        <section wb-section="services" className="min-h-screen bg-gray-700 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-white">Services</h1>
        </section>
        
        <section wb-section="about" className="min-h-screen bg-gray-600 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-white">About</h1>
        </section>
        
        <section wb-section="pricing" className="min-h-screen bg-gray-500 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-white">Pricing</h1>
        </section>
      </main>

      {/* Footer Section (no animation) */}
      <footer className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
            Ready to start your project? Let's create something amazing together.
          </p>
          <button className="bg-red-400 hover:bg-red-500 text-black font-bold py-4 px-8 rounded-full transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;