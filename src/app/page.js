'use client'
import React from 'react';
import { CursorProvider } from '@/contexts/CursorContext';
import BlurryCursor from '@/component/cursor';
import Hero from '../pages/Hero';
import SecondSection from '@/pages/second-section';
import ThirdSection from '@/pages/Third-Section';
import LastSection from '@/pages/last-section';

export default function Home() {
  return (
    <CursorProvider>
      <BlurryCursor />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </CursorProvider>
  );
}