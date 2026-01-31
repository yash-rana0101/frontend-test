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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                    className={`relative w-full h-113.25 rounded-lg overflow-hidden transition-all duration-500 ${index === currentIndex ? 'ring-4 ring-[#E10174]' : 'opacity-100/50'}`}
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

      {/* Mobile: Single Image with Navigation */}
      <div className="md:hidden">
        <div className="relative aspect-9/16 max-h-150 overflow-hidden">
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          {/* Navigation Overlay */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-4 z-10">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
              className="w-9 h-9 bg-white/80 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-black w-8' : 'bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % heroImages.length)}
              className="w-9 h-9 bg-white/80 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
