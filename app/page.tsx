import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Differentiators } from '@/components/sections/Differentiators';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { MSP } from '@/components/sections/MSP';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Differentiators />
      <HowItWorks />
      <Pricing />
      <CaseStudies />
      <MSP />
      <FinalCTA />
      <Footer />
    </main>
  );
}
