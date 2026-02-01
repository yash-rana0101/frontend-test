'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  {
    id: 1,
    src: '/images/hero/hero-1.png',
    alt: 'Competition Suit 1',
    offset: 80,
  },
  {
    id: 2,
    src: '/images/hero/hero-2.png',
    alt: 'Competition Suit 2',
    offset: 40,
  },
  {
    id: 3,
    src: '/images/hero/hero-3.png',
    alt: 'Competition Suit 3',
    offset: 0,
  },
  {
    id: 4,
    src: '/images/hero/hero-4.png',
    alt: 'Competition Suit 4',
    offset: 40,
  },
  {
    id: 5,
    src: '/images/hero/hero-5.png',
    alt: 'Competition Suit 5',
    offset: 80,
  },
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Start with center image (3rd image)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Scroll to the current image when index changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const padding = 32; // px-8 = 32px on each side

      // Calculate the scroll position to center the current image
      const images = container.querySelectorAll('[data-image-index]');
      if (images[currentIndex]) {
        const targetImage = images[currentIndex] as HTMLElement;
        const imageLeft = targetImage.offsetLeft;
        const imageWidth = targetImage.offsetWidth;
        const scrollPosition = imageLeft - (containerWidth / 3) + (imageWidth / 3) + padding;

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);

  // Handle scroll to update current index based on snap position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft + (container.clientWidth / 3);

      // Find which image is closest to center
      const images = container.querySelectorAll('[data-image-index]');
      let closestIndex = 0;
      let closestDistance = Infinity;

      images.forEach((img, index) => {
        const element = img as HTMLElement;
        const imageCenter = element.offsetLeft + (element.offsetWidth / 2);
        const distance = Math.abs(scrollLeft - imageCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== currentIndex) {
        setCurrentIndex(closestIndex);
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop: Horizontal Carousel */}
      <div className="hidden md:block">
        <div className="relative h-125 bg-linear-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full">
            <div className="flex items-center justify-center gap-6 h-full pt-10">
              {heroImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative w-64 h-full transition-all duration-500 shrink-0"
                  style={{
                    transform: `translateY(${image.offset}px)`,
                  }}
                >
                  <div
                    className={`relative w-full h-113.25 rounded-lg overflow-hidden transition-all duration-500 ${index === currentIndex ? 'ring-2 ring-[#E10174]' : 'opacity-100/50'}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom Gradient Image Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-50 pointer-events-none">
              {/* White gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal Carousel - Centered with Peek Effect */}
      <div className="md:hidden">
        <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden" style={{ height: '600px' }}>
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-3 items-start justify-start h-full overflow-x-auto scrollbar-hide px-8 pt-8"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {heroImages.map((image, index) => (
              <div
                key={image.id}
                data-image-index={index}
                className={`shrink-0 flex items-center transition-all duration-500 ${index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                  }`}
                style={{
                  paddingTop: index === 2 ? '0px' : index === 1 || index === 3 ? '40px' : '80px',
                  scrollSnapAlign: 'center',
                  width: '280px',
                }}
              >
                <div
                  className={`relative w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${index === currentIndex ? 'ring-4 ring-pink-500' : ''
                    }`}
                  style={{
                    aspectRatio: '9/16',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Gradient Overlay - Matching Figma */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '200px' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
