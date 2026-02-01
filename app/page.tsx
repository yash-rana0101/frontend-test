import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection';
import { StorySpotlightSection } from '@/components/sections/StorySpotlightSection';
import { MobileStorySpotlight } from '@/components/sections/MobileStorySpotlight';
import { ShareStorySection } from '@/components/sections/ShareStorySection';
import { ConsultationBanner } from '@/components/sections/ConsultationBanner';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <ClientStoriesSection />

      {/* Desktop Story Spotlight */}
      <div className="hidden md:block">
        <StorySpotlightSection />
      </div>

      {/* Mobile Story Spotlight */}
      <MobileStorySpotlight />

      {/* Share Your Story Section - Mobile Only */}
      <div className="md:hidden">
        <ShareStorySection />
      </div>

      <ConsultationBanner />
    </main>
  );
}
