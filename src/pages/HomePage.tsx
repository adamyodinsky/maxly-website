import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AppShowcaseSection from '@/components/sections/AppShowcaseSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppShowcaseSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
