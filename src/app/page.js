import ResearchApp from '@/component/Research-Approach';
import { gsap } from '../lib/gsap';
import Hero from '../pages/Hero';
import SecondSection from '@/pages/second-section';


export default function Home() {
  return (
<>
<Hero />
<SecondSection />
<ResearchApp/>
  </>  
  );
}
