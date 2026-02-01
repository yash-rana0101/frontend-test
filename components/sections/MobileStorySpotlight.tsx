'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface StoryCardProps {
  name: string;
  title: string;
  description: string;
  reviewText: string;
  suitImage: string;
  profileImage: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  name,
  title,
  description,
  reviewText,
  suitImage,
  profileImage
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [profileImage, suitImage]; // Can add more images

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Image Carousel */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full overflow-hidden rounded-none" style={{ aspectRatio: '320/473' }}>
          <Image
            src={slides[currentSlide]}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between px-6">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="bg-[#F3BCDA] p-1.5 rounded-full flex items-center justify-center"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-pink-600 w-8' : 'bg-pink-200 w-2'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="bg-[#E10174] p-1.5 rounded-full flex items-center justify-center"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Story Details */}
      <div className="flex flex-col gap-2 px-6">
        <div className="flex flex-col gap-10 py-6">
          <div className="flex flex-col gap-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[28px] font-medium text-black tracking-[-1px] font-['Montserrat',sans-serif] leading-normal"
            >
              Meet {name}
            </motion.h3>

            <div className="h-px bg-gray-200" />

            <div className="flex flex-col gap-3">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[18px] font-medium text-black tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal"
              >
                {title}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base text-black/80 tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal"
              >
                {description}
              </motion.p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 h-12 border border-[#E10174] rounded-lg flex items-center justify-end px-4 overflow-hidden">
              <span className="text-base font-medium text-black tracking-[-0.5px] font-['Montserrat',sans-serif]">
                View suit
              </span>
              <div className="w-12 h-12 ml-2 -mr-4">
                <Image
                  src={suitImage}
                  alt="Suit preview"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </button>

            <button className="flex-1 h-12 border border-[#E10174] rounded-lg flex items-center justify-center gap-2 px-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-base font-medium text-black tracking-[-0.5px] font-['Montserrat',sans-serif]">
                Wishlist suit
              </span>
            </button>
          </div>
        </div>

        {/* Review Card */}
        <div className="bg-white border-2 border-black/8 rounded-2xl p-6 flex gap-6">
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex gap-2 items-center">
              <span className="text-sm text-black/64 tracking-[-0.5px] uppercase font-['Montserrat',sans-serif]">
                Review
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFD700">
                    <path d="M10 1l2.5 6.5L19 8l-5 4.5L15.5 19 10 15l-5.5 4L6 12.5 1 8l6.5-.5L10 1z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-[18px] text-black tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal">
              {reviewText}
            </p>
          </div>
          <div className="w-8 h-8 shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3359 15.9974H6.66927C5.93289 15.9974 5.33594 15.4004 5.33594 14.6641V9.9974C5.33594 9.26102 5.93289 8.66406 6.66927 8.66406H12.0026C12.739 8.66406 13.3359 9.26102 13.3359 9.9974V15.9974ZM13.3359 15.9974C13.3359 19.3307 12.0026 21.3307 8.0026 23.3307" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
              <path d="M26.6641 15.9974H19.9974C19.261 15.9974 18.6641 15.4004 18.6641 14.6641V9.9974C18.6641 9.26102 19.261 8.66406 19.9974 8.66406H25.3307C26.0671 8.66406 26.6641 9.26102 26.6641 9.9974V15.9974ZM26.6641 15.9974C26.6641 19.3307 25.3307 21.3307 21.3307 23.3307" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileStorySpotlight: React.FC = () => {
  const stories = [
    {
      name: 'Gissele Quezada',
      title: 'Became a coach',
      description: 'Placement text, to place everywhere. Please change it later according to the context it is kept around.',
      reviewText: 'Good words about the company and assisting them to achieve whatever.',
      suitImage: '/images/stories/story-1.png',
      profileImage: '/images/stories/story-2.png',
    },
    {
      name: 'Gissele Quezada',
      title: 'Became a coach',
      description: 'Placement text, to place everywhere. Please change it later according to the context it is kept around.',
      reviewText: 'Good words about the company and assisting them to achieve whatever.',
      suitImage: '/images/stories/story-3.png',
      profileImage: '/images/stories/story-4.png',
    },
    {
      name: 'Gissele Quezada',
      title: 'Became a coach',
      description: 'Placement text, to place everywhere. Please change it later according to the context it is kept around.',
      reviewText: 'Good words about the company and assisting them to achieve whatever.',
      suitImage: '/images/stories/story-5.png',
      profileImage: '/images/stories/story-6.png',
    },
  ];

  return (
    <div className="md:hidden flex flex-col gap-16 py-16">
      {stories.map((story, index) => (
        <React.Fragment key={index}>
          <StoryCard {...story} />
          {index < stories.length - 1 && (
            <div className="w-20 h-px bg-pink-400 self-center rounded-full" />
          )}
        </React.Fragment>
      ))}

      {/* Load More Button */}
      <div className="flex justify-center px-6">
        <button className="h-12 px-4 border border-[#E10174] rounded-lg text-base font-medium text-black tracking-[-0.5px] font-['Montserrat',sans-serif]">
          Load more
        </button>
      </div>
    </div>
  );
};
