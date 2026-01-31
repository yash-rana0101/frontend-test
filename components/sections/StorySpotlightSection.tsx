'use client';

import React from 'react';

export const StorySpotlightSection: React.FC = () => {
  return (
    <section className="py-44 md:py-40 bg-white relative overflow-hidden">
        <div className="absolute top-110 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-linear-to-bl bg-linear-to-br from-[#E10174]/50 via-pink-200/50 to-transparent blur-3xl " />
      <div className="max-w-165 mx-auto px-4 md:px-6 relative z-10">


        {/* Main Content */}
        <div className="text-center">
          
          {/* Pink gradient circle background with blur */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8 font-['Montserrat',sans-serif] leading-tight -z-20">
            We&apos;re opening the spotlight to you, our incredible athletes.
          </h2>

          <p className="text-base text-gray-700 mb-6 font-['Montserrat',sans-serif]">
            Tell us:
          </p>

          {/* Quote Box */}
            

          <div className="bg-white rounded-xl p-6 mb-6 relative z-20 shadow-lg">

            {/* Opening quote icon */}
            <div className="absolute top-6 right-6 z-10">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 20C8 17.7909 6.20914 16 4 16V12C8.41828 12 12 15.5817 12 20V28H4V20H8Z" fill="#E10174" />
                <path d="M24 20C24 17.7909 22.2091 16 20 16V12C24.4183 12 28 15.5817 28 20V28H20V20H24Z" fill="#E10174" />
              </svg>
            </div>

            <div className="space-y-4 text-left pr-12 relative z-10">
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="#E10174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="text-base text-gray-800 font-['Montserrat',sans-serif] leading-relaxed">
                  What was going through your mind during prep?
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="#E10174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="text-base text-gray-800 font-['Montserrat',sans-serif] leading-relaxed">
                  How did stepping on stage in your suit make you feel?
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="#E10174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="text-base text-gray-800 font-['Montserrat',sans-serif] leading-relaxed">
                  What&apos;s one moment that changed everything?
                </p>
              </div>
            </div>
          </div>

            {/* CTA Button */}
            <div className="my-8 relative z-10">
              <button className="w-full bg-white border-2 border-[#E10174] text-black py-3 px-6 rounded-lg text-base font-medium font-['Montserrat',sans-serif] hover:bg-[#E10174] hover:text-white transition-colors">
                Share your story with Everyone
              </button>
            </div>

          <p className="text-sm text-gray-600 font-['Montserrat',sans-serif] leading-relaxed">
            ✨ Your story could uplift someone just starting. Motivate someone who almost gave up. Show what&apos;s possible with heart and hustle.
          </p>
        </div>
      </div>
    </section>
  );
};
