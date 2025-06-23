'use client'
import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, Plus } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

const FraudCategories = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const descriptionRef = useRef(null);
  const subcategoriesRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const menuItemIds = [1, 2, 3, 4, 5];
      let currentIndex = 0;
      
      const backgrounds = menuItemIds.map(id => {
        const menuItem = document.querySelector(`[data-menu-id="${id}"]`);
        return menuItem?.querySelector(".menu-item-bg");
      }).filter(Boolean);
      
      backgrounds.forEach(bg => {
        gsap.set(bg, { xPercent: -101, opacity: 0 });
      });
      
      // Animation function
      const animateNext = () => {
        if (backgrounds.length === 0) return;
        
        const currentBg = backgrounds[currentIndex];
        const currentItemId = menuItemIds[currentIndex];

        // Update selectedItem to match the animation
        setSelectedItem(currentItemId);
        
        const tl = gsap.timeline();
        
        tl.to(currentBg, {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        })
        .to(currentBg, {
          duration: 2
        })
        .to(currentBg, {
          xPercent: 101,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(currentBg, { xPercent: -101 });
            currentIndex = (currentIndex + 1) % menuItemIds.length;
            animateNext();
          }
        });
      };
      
      // Start the animation loop
      animateNext();
    };

    loadGSAP();
  }, []);

  // Text Animation Effect
  useEffect(() => {    
    if (descriptionRef.current && subcategoriesRef.current) {
      const descSplit = new SplitText(descriptionRef.current, { type: "lines" });
      const subSplit = new SplitText(subcategoriesRef.current, { type: "lines" });
      
      // Create masks for each line
      gsap.set([descSplit.lines, subSplit.lines], { 
        yPercent: 100,
        opacity: 0 
      });
      
      // Animate in
      gsap.to([descSplit.lines, subSplit.lines], {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  }, [selectedItem]);

  const menuItems = [
    {
      id: 1,
      title: "Bank Cards",
      description: "Includes conversations where specific bank cards are mentioned.",
      subcategories: "Credit Cards, Debit Cards, Prepaid Cards.",
      icon: <CreditCard className="w-16 h-16 text-white" />
    },
    {
      id: 2,
      title: "Fraud types (bank cards)",
      description: "Various fraud methods targeting bank cards and related services.",
      subcategories: "Skimming, Phishing, Card Cloning, ATM Fraud.",
      icon: <CreditCard className="w-16 h-16 text-white" />
    },
    {
      id: 3,
      title: "Non-card services",
      description: "Financial services that don't involve physical cards.",
      subcategories: "Wire Transfers, Mobile Banking, Online Banking, Digital Wallets.",
      icon: <CreditCard className="w-16 h-16 text-white" />
    },
    {
      id: 4,
      title: "Fraud types (non-card services)",
      description: "Fraud methods targeting non-card financial services.",
      subcategories: "Account Takeover, Social Engineering, Identity Theft, Business Email Compromise.",
      icon: <CreditCard className="w-16 h-16 text-white" />
    },
    {
      id: 5,
      title: "Frauds/scams related to cyber-attacks",
      description: "Cyber-enabled fraud and scam techniques.",
      subcategories: "Ransomware, Malware, Data Breaches, Cryptocurrency Scams.",
      icon: <CreditCard className="w-16 h-16 text-white" />
    }
  ];

  const selectedItemData = menuItems.find(item => item.id === selectedItem);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
            <div className="text-white/90 leading-relaxed text-xl p-6">
              <p>
                The conversation were segmented into categories and 
                subcategories based on key topics. Additional topics were 
                created to focus on specific aspects of the safety and security 
                conversations. The topics selected for deeper analysis are as 
                follows:
              </p>
              </div>
              <div>
                <Image 
                src='/images/12.png' 
                alt='woman holding card'
                width={800}
                height={300}
                className="object-contain"
                />          
          </div>
        </div>
            <div className="flex border border-gray-700 rounded-lg overflow-hidden max-w-6xl mx-auto shadow-2xl">
                <div className="w-43 md:w-96">
                {menuItems.map((item) => (
                    <div
                    key={item.id}
                    data-menu-id={item.id}
                    className={`relative p-4 cursor-pointer transition-all duration-200 border-b border-r border-gray-700 last:border-b-0 overflow-hidden text-white`}
                    >
                    {/* GSAP Animation Background */}
                    <div className="menu-item-bg absolute inset-0 bg-amber-500"></div>
                    
                    <div className="relative z-10 flex items-center space-x-3">
                        <span className="text-sm md:text-base font-medium">{item.id}.</span>
                        <span className="text-sm md:text-base">{item.title}</span>
                    </div>
                    </div>
                ))}
                </div>

               <div className="flex-1 p-8 md:p-5 text-white">
                <div className="flex flex-col items-center space-y-6">
                <div className="relative ">
                    {selectedItemData?.icon}
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                    <Plus className="w-4 h-4 text-gray-900" />
                    </div>
                </div>

                <div className="overflow-hidden">
                    <p 
                    ref={descriptionRef}
                    className="text-sm md:text-lg text-gray-300 text-center max-w-md leading-relaxed gsap-text-animate"
                    >
                    {selectedItemData?.description}
                    </p>
                </div>
                <div className="text-center overflow-hidden">
                    <span 
                    ref={subcategoriesRef}
                    className="text-gray-400 text-sm md:text-base gsap-text-animate"
                    >
                    <span className="font-medium text-sm md:text-lg">Subcategories:</span> {selectedItemData?.subcategories}
                    </span>
                </div>
                </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default FraudCategories;