# mastercard-microsite
Next.js Project Setup with Tailwind CSS, GSAP and Swiper
This guide will walk you through setting up a Next.js project with all the modern animation and styling libraries you need.
Prerequisites
Node.js 18.0 or later
npm, yarn, or pnpm package manager
Step 1: Create Next.js Project
# Create a new Next.js project
npx create-next-app@latest mastercard

# Navigate to the project directory
cd my-animated-app

When prompted, select:
❌TypeScript
❌ESLint
✅ Tailwind CSS
✅ src/ directory
✅ App Router
❌ Turbopack (optional, can enable later)
❌ Import alias customization (use default)
Step 2: Install Animation Libraries
# Install GSAP
npm install gsap

# Install Swiper
npm install swiper

# Install additional dependencies for better development
npm install @types/gsap --save-dev

Step 3: Configure GSAP
GSAP requires special configuration for Next.js due to SSR. Create a GSAP utility file:
src/lib/gsap.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export { gsap, ScrollTrigger, TextPlugin };
export default gsap;
