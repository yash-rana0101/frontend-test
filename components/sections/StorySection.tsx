'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const StorySection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 md:gap-20">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2 max-w-159 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[14px] text-black/64 font-normal uppercase tracking-[-0.5px] font-['Montserrat',sans-serif]"
            >
              Glimpse of happiness
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[18px] md:text-[25px] font-semibold text-black leading-normal tracking-[-1px] font-['Montserrat',sans-serif]"
            >
              Behind every custom suit lies a story of grit, transformation, and unshakable determination
            </motion.h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-10 w-full items-center">
            {/* Feature Items - Horizontal Layout for Desktop, Only Stunning Personalities for Mobile */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-5xl">
              {/* Worldwide Stories - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex items-center gap-3 w-full md:w-auto"
              >
                <div className="w-8 h-8 relative shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3333 29.6667C23.6971 29.6667 29.6667 23.6971 29.6667 16.3333C29.6667 8.96954 23.6971 3 16.3333 3C8.96954 3 3 8.96954 3 16.3333C3 23.6971 8.96954 29.6667 16.3333 29.6667Z" stroke="#E10174" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.67188 17L11.0052 19.6667L9.67188 24.3333L11.0052 28.3333" stroke="#E10174" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 27.6667L22.3333 24.3333L19 23V18.3333L23 17L29 17.6667" stroke="#E10174" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25.6693 7.66406L25.0026 9.66406L20.3359 10.3307V14.3307L23.6693 12.9974H26.3359L29.0026 14.3307" stroke="#E10174" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.67188 14.332L7.00521 11.6654L10.3385 10.9987L13.0052 6.9987L11.6719 4.33203" stroke="#E10174" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <p className="text-[20px] font-medium text-black whitespace-nowrap tracking-[-0.5px] font-['Montserrat',sans-serif]">
                  Worldwide Stories
                </p>
              </motion.div>

              {/* Stunning Personalities - Centered for Mobile, Normal for Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 md:gap-3 w-full md:w-auto justify-center"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 relative shrink-0">
                  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6641 20.0013C17.1637 20.0013 19.9974 17.2667 19.9974 10.668C19.9974 17.2667 22.8113 20.0013 29.3307 20.0013C22.8113 20.0013 19.9974 22.8152 19.9974 29.3346C19.9974 22.8152 17.1637 20.0013 10.6641 20.0013Z" stroke="#E10174" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2.66406 8.66797C6.84241 8.66797 8.66406 6.91001 8.66406 2.66797C8.66406 6.91001 10.473 8.66797 14.6641 8.66797C10.473 8.66797 8.66406 10.4769 8.66406 14.668C8.66406 10.4769 6.84241 8.66797 2.66406 8.66797Z" stroke="#E10174" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[16px] md:text-[20px] font-medium text-black whitespace-nowrap tracking-[-0.5px] font-['Montserrat',sans-serif]">
                  Stunning Personalities
                </p>
              </motion.div>

              {/* Unique Products - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden md:flex items-center gap-3 w-full md:w-auto justify-end"
              >
                <div className="w-8 h-8 relative shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.031 3.49694C15.0888 2.33543 16.9164 2.33543 17.9742 3.49694L19.3345 4.99058C19.8691 5.5776 20.6374 5.89587 21.4305 5.85881L23.4486 5.7645C25.0178 5.69115 26.3101 6.98346 26.2368 8.55275L26.1425 10.5708C26.1054 11.3639 26.4237 12.1322 27.0107 12.6668L28.5044 14.0271C29.6659 15.0849 29.6659 16.9125 28.5044 17.9703L27.0107 19.3306C26.4237 19.8652 26.1054 20.6335 26.1425 21.4266L26.2368 23.4447C26.3101 25.0139 25.0178 26.3062 23.4486 26.2329L21.4305 26.1386C20.6374 26.1015 19.8691 26.4198 19.3345 27.0068L17.9742 28.5005C16.9164 29.662 15.0888 29.662 14.031 28.5005L12.6708 27.0068C12.1361 26.4198 11.3678 26.1015 10.5747 26.1386L8.55665 26.2329C6.98737 26.3062 5.69506 25.0139 5.7684 23.4447L5.86271 21.4266C5.89978 20.6335 5.58151 19.8652 4.99449 19.3306L3.50085 17.9703C2.33934 16.9125 2.33934 15.0849 3.50085 14.0271L4.99449 12.6668C5.58151 12.1322 5.89978 11.3639 5.86271 10.5708L5.7684 8.55274C5.69506 6.98346 6.98737 5.69116 8.55665 5.7645L10.5747 5.85881C11.3678 5.89587 12.1361 5.5776 12.6708 4.99058L14.031 3.49694Z" stroke="#E10174" strokeWidth="2" />
                    <path d="M12 16L14.6667 18.6667L20 13.3333" stroke="#E10174" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[20px] font-medium text-black whitespace-nowrap tracking-[-0.5px] font-['Montserrat',sans-serif]">
                  Unique Products
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons - Side by side for Mobile, Horizontal Layout for Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-row md:flex-row items-center justify-center gap-2 md:gap-4 w-full md:w-auto"
            >
              <button className="flex-1 md:flex-none h-12 px-4 py-2 rounded-lg border border-[#E10174] text-black text-[16px] font-medium hover:bg-[#E10174] hover:text-white transition-colors font-['Montserrat',sans-serif] tracking-[-0.5px]">
                Share your story
              </button>
              <button className="flex-1 md:flex-none h-12 px-4 py-2 rounded-lg border border-[#F3BCDA] bg-[#FDF2F9] text-black text-[14px] font-normal hover:bg-[#F3BCDA] transition-colors font-['Montserrat',sans-serif] tracking-[-0.5px]">
                Book a Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
