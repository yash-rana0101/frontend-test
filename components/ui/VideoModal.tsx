'use client';

import React from 'react';
import Image from 'next/image';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  thumbnailUrl: string;
  title: string;
  subtitle: string;
  description: string;
  reviewText?: string;
  suitImageUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  thumbnailUrl,
  title,
  subtitle,
  description,
  reviewText = "Good words about the company and assisting them to achieve whatever.",
  suitImageUrl = "/images/products/suitImageUrl.png"
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#FDF2F9] rounded-[40px] p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side - Video/Image with navigation */}
        <div className="flex flex-col gap-4 items-center justify-center flex-shrink-0">
          <div className="relative w-[320px] h-[525px] rounded-2xl overflow-hidden">
            <Image
              src={thumbnailUrl}
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full">
            <button
              onClick={handlePrevious}
              className="bg-[#F3BCDA] p-1.5 rounded-full hover:opacity-80 transition-opacity"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${index === currentSlide
                    ? 'w-8 bg-[#E10174]'
                    : 'w-2 bg-[#F3BCDA]'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-[#E10174] p-1.5 rounded-full hover:opacity-80 transition-opacity"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - Details */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Story Details Card */}
          <div className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-2xl p-6 flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              {/* Title */}
              <div>
                <h2 className="text-[28px] font-medium text-black font-['Montserrat',sans-serif] tracking-[-1px]">
                  {title}
                </h2>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(0,0,0,0.08)]" />

              {/* Story Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium text-black font-['Montserrat',sans-serif] tracking-[-0.5px]">
                  {subtitle}
                </h3>
                <p className="text-base font-normal text-[rgba(0,0,0,0.8)] font-['Montserrat',sans-serif] tracking-[-0.5px] leading-normal">
                  {description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 bg-white border border-[#E10174] rounded-lg h-12 flex items-center overflow-hidden hover:bg-pink-50 transition-colors">
                <div className="flex-1 px-4 text-base font-medium text-black font-['Montserrat',sans-serif] tracking-[-0.5px] text-center">
                  View suit
                </div>
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image
                    src={suitImageUrl}
                    alt="Suit"
                    fill
                    className="object-cover"
                  />
                </div>
              </button>

              <button className="flex-1 bg-white border border-[#E10174] rounded-lg h-12 px-4 flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="#E10174"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <span className="text-base font-medium text-black font-['Montserrat',sans-serif] tracking-[-0.5px]">
                  Wishlist suit
                </span>
              </button>
            </div>
          </div>

          {/* Review Card */}
          <div className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3">
                {/* Review Label and Stars */}
                <div className="flex gap-2 items-center">
                  <span className="text-sm font-normal text-[rgba(0,0,0,0.64)] font-['Montserrat',sans-serif] tracking-[-0.5px] uppercase">
                    REVIEW
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1L12.5 7.5H19L14 11.5L16.5 18L10 14L3.5 18L6 11.5L1 7.5H7.5L10 1Z" fill="#E10174" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-lg font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.5px] leading-normal">
                  {reviewText}
                </p>
              </div>

              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3359 15.9974H6.66927C5.93289 15.9974 5.33594 15.4004 5.33594 14.6641V9.9974C5.33594 9.26102 5.93289 8.66406 6.66927 8.66406H12.0026C12.739 8.66406 13.3359 9.26102 13.3359 9.9974V15.9974ZM13.3359 15.9974C13.3359 19.3307 12.0026 21.3307 8.0026 23.3307" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
                  <path d="M26.6641 15.9974H19.9974C19.261 15.9974 18.6641 15.4004 18.6641 14.6641V9.9974C18.6641 9.26102 19.261 8.66406 19.9974 8.66406H25.3307C26.0671 8.66406 26.6641 9.26102 26.6641 9.9974V15.9974ZM26.6641 15.9974C26.6641 19.3307 25.3307 21.3307 21.3307 23.3307" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
