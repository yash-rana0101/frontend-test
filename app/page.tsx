'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection';
import { StorySpotlightSection } from '@/components/sections/StorySpotlightSection';
import { MobileStorySpotlight } from '@/components/sections/MobileStorySpotlight';
import { ShareStorySection } from '@/components/sections/ShareStorySection';
import { ConsultationBanner } from '@/components/sections/ConsultationBanner';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <StorySection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ClientStoriesSection />
      </motion.div>

      {/* Desktop Story Spotlight */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StorySpotlightSection />
        </motion.div>
      </div>

      {/* Mobile Story Spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MobileStorySpotlight />
      </motion.div>

      {/* Share Your Story Section - Mobile Only */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ShareStorySection />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ConsultationBanner />
      </motion.div>
    </main>
  );
}
