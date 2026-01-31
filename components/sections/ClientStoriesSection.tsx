'use client';

import React from 'react';
import Image from 'next/image';

// Story tile component with video overlay
const StoryTile: React.FC<{ hasVideo?: boolean; imageSrc: string; className?: string }> = ({
  hasVideo = false,
  imageSrc,
  className = ''
}) => {
  return (
    <div className={`relative w-full h-full rounded-2xl overflow-hidden ${className}`}>
      {/* Image */}
      <Image
        src={imageSrc}
        alt="Client story"
        fill
        className="object-cover"
      />

      {/* Dark overlay for video tiles */}
      {hasVideo && (
        <div className="absolute inset-0 bg-black/30 z-5" />
      )}

      {/* Video play button overlay */}
      {hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            className="w-16 h-16 flex items-center justify-center bg-transparent hover:scale-110 transition-transform"
            aria-label="Play video"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.16" d="M31.9638 59.9317C47.4102 59.9317 59.932 47.4098 59.932 31.9634C59.932 16.5169 47.4102 3.99512 31.9638 3.99512C16.5173 3.99512 3.99548 16.5169 3.99548 31.9634C3.99548 47.4098 16.5173 59.9317 31.9638 59.9317Z" fill="#FDF2F9" />
              <path d="M44.712 30.5681C45.8084 31.177 45.8084 32.7537 44.712 33.3626L26.7215 43.3526C25.6562 43.9442 24.3474 43.1739 24.3474 41.9554V21.9753C24.3474 20.7568 25.6562 19.9866 26.7215 20.5781L44.712 30.5681Z" fill="white" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

// Split tile component (2x2 grid or 2x1 grid)
const SplitTile: React.FC<{ layout: 'quad' | 'horizontal' | 'vertical'; images: string[] }> = ({ layout, images }) => {
  if (layout === 'quad') {
    return (
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0">
        {images.slice(0, 4).map((img, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <Image src={img} alt={`Story ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'horizontal') {
    return (
      <div className="w-full h-full flex flex-col gap-0">
        {images.slice(0, 2).map((img, idx) => (
          <div key={idx} className="relative flex-1 overflow-hidden">
            <Image src={img} alt={`Story ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  // vertical layout
  return (
    <div className="w-full h-full flex gap-0">
      <div className="relative flex-1 overflow-hidden">
        <Image src={images[0]} alt="Story 1" fill className="object-cover" />
      </div>
      <div className="relative flex-1 flex flex-col gap-0">
        <div className="relative flex-1 overflow-hidden">
          <Image src={images[1]} alt="Story 2" fill className="object-cover" />
        </div>
        <div className="relative flex-1 overflow-hidden flex items-center justify-center">
          <Image src={images[2]} alt="Story 3" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 z-5" />
          <button
            className="relative z-10 w-16 h-16 flex items-center justify-center bg-transparent hover:scale-110 transition-transform"
            aria-label="Play video"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.16" d="M31.9638 59.9317C47.4102 59.9317 59.932 47.4098 59.932 31.9634C59.932 16.5169 47.4102 3.99512 31.9638 3.99512C16.5173 3.99512 3.99548 16.5169 3.99548 31.9634C3.99548 47.4098 16.5173 59.9317 31.9638 59.9317Z" fill="#FDF2F9" />
              <path d="M44.712 30.5681C45.8084 31.177 45.8084 32.7537 44.712 33.3626L26.7215 43.3526C25.6562 43.9442 24.3474 43.1739 24.3474 41.9554V21.9753C24.3474 20.7568 25.6562 19.9866 26.7215 20.5781L44.712 30.5681Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const ClientStoriesSection: React.FC = () => {
  // Client story images - matching the provided images
  const storyImages = [
    '/images/stories/story-1.png',  // Competition stage photo
    '/images/stories/story-2.png',  // Unboxing video
    '/images/stories/story-3.png',  // Selfie video
    '/images/stories/story-4.png',  // Stage with medals
    '/images/stories/story-5.png',  // Newspaper article
    '/images/stories/story-6.png',  // Medal winner
    '/images/stories/story-7.png',  // Stage photo
    '/images/stories/story-8.png',  // Stage photo
    '/images/stories/story-9.png',  // Selfie
    '/images/stories/story-10.png', // Studio photo
    '/images/stories/story-11.png', // Competition stage
    '/images/stories/story-12.png', // Stage winner
    '/images/stories/story-13.png', // Trophy winner
    '/images/stories/story-14.png', // Portrait 1
    '/images/stories/story-15.png', // Portrait 2
    '/images/stories/story-16.png', // Back pose 1
    '/images/stories/story-17.png', // Back pose 2
    '/images/stories/story-18.png', // Portrait repeat
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Grid Layout - 4x4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {/* Row 1 */}
          <div className="aspect-4/5">
            <StoryTile hasVideo imageSrc={storyImages[0]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile hasVideo imageSrc={storyImages[1]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile hasVideo imageSrc={storyImages[2]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile hasVideo imageSrc={storyImages[3]} />
          </div>

          {/* Row 2 */}
          <div className="aspect-4/5">
            <StoryTile imageSrc={storyImages[4]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile hasVideo imageSrc={storyImages[5]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile imageSrc={storyImages[6]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile hasVideo imageSrc={storyImages[7]} />
          </div>

          {/* Row 3 */}
          <div className="aspect-4/5">
            <StoryTile imageSrc={storyImages[8]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile imageSrc={storyImages[9]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile imageSrc={storyImages[10]} />
          </div>
          <div className="aspect-4/5">
            <StoryTile imageSrc={storyImages[11]} />
          </div>

          {/* Row 4 - Split layouts */}
          <div className="aspect-4/5">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <SplitTile layout="horizontal" images={[storyImages[12], storyImages[13]]} />
            </div>
          </div>
          <div className="aspect-4/5">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <SplitTile layout="vertical" images={[storyImages[14], storyImages[15], storyImages[16]]} />
            </div>
          </div>
          <div className="aspect-4/5">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <SplitTile layout="vertical" images={[storyImages[14], storyImages[15], storyImages[16]]} />
            </div>
          </div>
          <div className="aspect-4/5">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <SplitTile layout="vertical" images={[storyImages[14], storyImages[15], storyImages[17]]} />
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button className="px-8 py-3 border-2 border-[#E10174] text-[#E10174] rounded-lg text-base font-medium font-['Montserrat',sans-serif] hover:bg-[#E10174] hover:text-white transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};
