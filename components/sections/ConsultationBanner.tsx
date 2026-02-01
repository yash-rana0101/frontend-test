'use client';

import React from 'react';
import Image from 'next/image';

export const ConsultationBanner: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-250 mx-auto px-6 md:px-6">
        {/* Mobile Version */}
        <div className="md:hidden bg-[#FDF2F9] border-[1.4px] border-[#F3BCDA] rounded-sm p-8 flex flex-col gap-8 items-center">
          <div className="w-10 h-10 relative">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.68296 18.3359H8.8663V31.0693H5.68296C4.85012 31.0695 4.05036 30.7432 3.45525 30.1606C2.86014 29.5779 2.51707 28.7853 2.49963 27.9526V21.6693C2.47932 21.2388 2.54664 20.8087 2.6975 20.405C2.84836 20.0012 3.07962 19.6324 3.37727 19.3207C3.67492 19.009 4.03275 18.761 4.42908 18.5918C4.82542 18.4225 5.25199 18.3355 5.68296 18.3359Z" stroke="black" stroke-width="2.5" stroke-miterlimit="10" />
              <path d="M31.1328 18.3359H34.3161C34.7471 18.3355 35.1737 18.4225 35.57 18.5918C35.9664 18.761 36.3242 19.009 36.6218 19.3207C36.9195 19.6324 37.1508 20.0012 37.3016 20.405C37.4525 20.8087 37.5198 21.2388 37.4995 21.6693V28.0359C37.4995 28.8802 37.1641 29.6899 36.5671 30.2869C35.9701 30.8839 35.1604 31.2193 34.3161 31.2193H31.1328V18.3359Z" stroke="black" stroke-width="2.5" stroke-miterlimit="10" />
              <path d="M32.7333 31.1328C32.7333 32.8214 32.0626 34.4407 30.8686 35.6347C29.6746 36.8287 28.0552 37.4995 26.3667 37.4995H20" stroke="black" stroke-width="2.5" stroke-miterlimit="10" />
              <path d="M7.2666 18.4167V15.2333C7.2666 11.8562 8.60815 8.61747 10.9961 6.22951C13.3841 3.84154 16.6228 2.5 19.9999 2.5C23.377 2.5 26.6158 3.84154 29.0038 6.22951C31.3917 8.61747 32.7333 11.8562 32.7333 15.2333V18.4167" stroke="black" stroke-width="2.5" stroke-miterlimit="10" />
            </svg>
          </div>

          <div className="flex flex-col gap-4 text-start">
            <h2 className="text-[18px] font-medium text-black tracking-[-1px] font-['Montserrat',sans-serif] leading-normal text-center">
              Get Ready for your next Competition
            </h2>
            <p className="text-base text-[#1C1C1C]/60 tracking-[-0.5px] font-['Montserrat',sans-serif] leading-normal">
              Not sure which style suits you? Chat with our experts on Instagram for a quick call! Get FREE design samples and expert advice on colors and cuts that meet your federation&apos;s requirements!
            </p>
          </div>

          <button className="bg-[#E10174]/80 text-white px-4 h-12 rounded-lg text-base font-medium font-['Montserrat',sans-serif] tracking-[-0.5px] w-full hover:bg-[#C00060] transition-colors">
            Book a Free Consultation
          </button>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:flex flex-row items-center gap-8 bg-pink-300/20 p-8 rounded-xl">
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
