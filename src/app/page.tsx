import CTASection from '@/components/home/CTASection';
import { Hero } from '@/components/home/Hero';
import { Results } from '@/components/home/Results';
import { Services } from '@/components/home/Services';
import { ResultsAndIdealClient } from '@/components/home/ResultsAndIdealClient';
import { StoriesPreview } from '@/components/home/StoriesPreview';
import WhyYelobase from '@/components/home/WhyYelobase';
import ZohoPartnership from '@/components/home/ZohoPartnership';

export default function HomePage() {
  return (
    <div className="" style={{ backgroundColor: "#FFFCF8" }}>
      <Hero />
      <Services />
      <Results />
      <WhyYelobase />
      <ZohoPartnership />
      <ResultsAndIdealClient />
      <StoriesPreview />
      <CTASection />
    </div>
  );
}
