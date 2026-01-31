import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <ClientStoriesSection />
    </main>
  );
}
