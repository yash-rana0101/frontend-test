'use client';

import React from 'react';
import Image from 'next/image';

export const ConsultationBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-20 relative overflow-hidden">
      <div className="max-w-250 mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-pink-300/20 p-8 rounded-xl">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <div className="max-w-110  text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-['Montserrat',sans-serif] leading-tight">
                Get Ready for your next Competition
              </h2>

              <p className="text-base text-gray-700 mb-8 font-['Montserrat',sans-serif] leading-relaxed">
                Not sure which style suits you? Chat with our experts on Instagram for a quick call! Get FREE design samples and expert advice on colors and cuts that meet your federation&apos;s requirements!
              </p>

              <button className="bg-[#E10174] text-white px-8 py-3 rounded-lg text-base font-medium font-['Montserrat',sans-serif] hover:bg-[#C00060] transition-colors">
                Book a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex-1 relative h-97 w-full overflow-hidden">
            <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden">
              {/* Purple crystal fabric */}
              <div className="absolute  bottom-0 w-100 h-100 transform rotate-[-15deg] z-10">
                <Image
                  src="/images/consultant/crystal-purple.png"
                  alt="Purple crystal fabric"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Green crystal fabric */}
              <div className="absolute  bottom-1 w-100 h-100 transform rotate-10 ">
                <Image
                  src="/images/consultant/crystal-green.png"
                  alt="Green crystal fabric"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
