import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection';
import { StorySpotlightSection } from '@/components/sections/StorySpotlightSection';
import { ConsultationBanner } from '@/components/sections/ConsultationBanner';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <ClientStoriesSection />
      <StorySpotlightSection />
      <ConsultationBanner />
    </main>
  );
}
