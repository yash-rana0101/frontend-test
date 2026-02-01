'use client';

import React from 'react';

export const ShareStorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Radial gradient background - mobile only */}
      <div
        className="md:hidden absolute top-110 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-gradient-to-bl from-[#E10174]/50 via-pink-200/50 to-transparent blur-3xl"
      />

      <div className="relative max-w-md mx-auto px-6">
        <div className="flex flex-col gap-8 items-center text-center">
          {/* Header */}
          <div className="flex flex-col gap-0">
            <p className="text-[18px] font-medium text-black tracking-[-1px] font-['Montserrat',sans-serif] leading-normal">
              We&apos;re opening the spotlight to you,
            </p>
            <p className="text-[18px] font-medium text-black tracking-[-1px] font-['Montserrat',sans-serif] leading-normal">
              our incredible athletes.
            </p>
          </div>

          {/* Questions Section */}
          <div className="flex flex-col gap-4 w-full">
            <p className="text-base font-medium text-[#1C1C1C] tracking-[-0.5px] font-['Montserrat',sans-serif]">
              Tell us:
            </p>

            <div className="bg-white rounded-2xl p-6 flex gap-6 w-full">
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex gap-3 items-start justify-start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="#E10174" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-base text-black tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal flex-1">
                    What was going through your mind during prep?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="#E10174" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-base text-black tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal flex-1">
                    How did stepping on stage in your suit make you feel?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="#E10174" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <p className="text-base text-black tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal flex-1">
                    What&apos;s one moment that changed everything?
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 shrink-0">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33594 14.6641V9.9974C5.33594 9.26102 5.93289 8.66406 6.66927 8.66406H12.0026C12.739 8.66406 13.3359 9.26102 13.3359 9.9974V15.9974H6.66927C5.93289 15.9974 5.33594 15.4004 5.33594 14.6641Z" fill="#E10174" />
                  <path d="M13.3359 15.9974H6.66927C5.93289 15.9974 5.33594 15.4004 5.33594 14.6641V9.9974C5.33594 9.26102 5.93289 8.66406 6.66927 8.66406H12.0026C12.739 8.66406 13.3359 9.26102 13.3359 9.9974V15.9974ZM13.3359 15.9974C13.3359 19.3307 12.0026 21.3307 8.0026 23.3307" stroke="#E10174" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18.6641 14.6641V9.9974C18.6641 9.26102 19.261 8.66406 19.9974 8.66406H25.3307C26.0671 8.66406 26.6641 9.26102 26.6641 9.9974V15.9974H19.9974C19.261 15.9974 18.6641 15.4004 18.6641 14.6641Z" fill="#E10174" />
                  <path d="M26.6641 15.9974H19.9974C19.261 15.9974 18.6641 15.4004 18.6641 14.6641V9.9974C18.6641 9.26102 19.261 8.66406 19.9974 8.66406H25.3307C26.0671 8.66406 26.6641 9.26102 26.6641 9.9974V15.9974ZM26.6641 15.9974C26.6641 19.3307 25.3307 21.3307 21.3307 23.3307" stroke="#E10174" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <button className="h-12 w-full bg-white border border-[#E10174] rounded-lg text-base font-medium text-black tracking-[-0.5px] font-['Montserrat',sans-serif] hover:bg-[#E10174] hover:text-white transition-colors">
              Share your story with Everyone
            </button>
          </div>

          {/* Bottom Text */}
          <p className="text-base text-black/80 tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal">
            ✨ Your story could uplift someone just starting. Motivate someone who almost gave up. Show what&apos;s possible with heart and hustle.
          </p>
        </div>
      </div>
    </section>
  );
};
