'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SITE_INFO } from '@/lib/constants';
import { SearchBar } from '@/components/ui/SearchBar';
import { IconButton } from '@/components/ui/IconButton';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/CartContext';

export const Navigation: React.FC = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => { },
    () => true,
    () => false
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      {/* Top Banner - Desktop Only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block bg-pink-100 text-center py-3 text-sm border-b-4 border-pink-200"
      >
        <p>Reach us on Instagram {SITE_INFO.instagram}, and our seasoned experts will personally guide you</p>
      </motion.div>

      {/* Mobile Navigation - Shows only on mobile */}
      <div className="md:hidden border-b border-gray-200 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="flex items-center"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Competition Suit Shop"
                  width={140}
                  height={18}
                  className="h-4.5 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/account" className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.997 12.3847C14.5885 12.3847 16.6894 10.2839 16.6894 7.69235C16.6894 5.10084 14.5885 3 11.997 3C9.40552 3 7.30469 5.10084 7.30469 7.69235C7.30469 10.2839 9.40552 12.3847 11.997 12.3847Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                  <path d="M3.39062 20.9923L3.69362 19.3136C4.05156 17.3748 5.07736 15.6226 6.59281 14.3615C8.10826 13.1004 10.0176 12.4099 11.9892 12.4102C13.9631 12.4106 15.8743 13.1034 17.3901 14.3678C18.9059 15.6322 19.9302 17.3881 20.2847 19.3299L20.5877 21.0087" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                </svg>
              </Link>
              <Link href="/wishlist" className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.46831 12.9304L4.17878 12.6408C3.73694 12.2007 3.3861 11.6779 3.14632 11.1022C2.90653 10.5265 2.78248 9.90918 2.78126 9.28553C2.77879 8.02602 3.27676 6.81712 4.16562 5.92477C5.05449 5.03241 6.26143 4.52971 7.52094 4.52724C8.78045 4.52477 9.98935 5.02274 10.8817 5.91161L12.0047 7.05215L13.1277 5.91161C13.5637 5.4559 14.0863 5.09184 14.6649 4.84077C15.2435 4.58971 15.8664 4.45669 16.497 4.44952C17.1277 4.44236 17.7534 4.56118 18.3376 4.79904C18.9217 5.03689 19.4524 5.38898 19.8987 5.83466C20.345 6.28033 20.6978 6.81063 20.9364 7.39445C21.175 7.97827 21.2946 8.60385 21.2883 9.23452C21.282 9.86518 21.1498 10.4882 20.8994 11.0671C20.6491 11.646 20.2858 12.1691 19.8306 12.6058L19.5411 12.8953L12.0047 20.4492L6.80205 15.2466L4.46831 12.9304Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                </svg>
              </Link>
              <Link href="/cart" className="relative flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.42555 9.59375H14.2154C15.0541 9.59375 15.8846 9.75894 16.6594 10.0799C17.4343 10.4008 18.1383 10.8713 18.7313 11.4643C19.3244 12.0573 19.7948 12.7614 20.1158 13.5362C20.4367 14.3111 20.6019 15.1416 20.6019 15.9802V19.9676H3.03906V15.9719C3.04128 14.2795 3.71512 12.6572 4.91257 11.4614C6.11003 10.2655 7.7332 9.59375 9.42555 9.59375Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                  <path d="M4.78906 11.5859C5.38497 12.2181 6.10405 12.7215 6.90196 13.0651C7.69987 13.4087 8.55971 13.5852 9.42846 13.5838H14.21C15.0787 13.5852 15.9386 13.4087 16.7365 13.0651C17.5344 12.7215 18.2535 12.2181 18.8494 11.5859" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                  <path d="M7.03125 10.3865V8.78987C7.03346 7.52019 7.53882 6.30316 8.43661 5.40536C9.33441 4.50756 10.5514 4.00221 11.8211 4C13.0908 4.00221 14.3078 4.50756 15.2056 5.40536C16.1034 6.30316 16.6088 7.52019 16.611 8.78987V10.3865" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                  <path d="M6.92886 19.9673C6.99953 19.6944 7.03327 19.4133 7.02917 19.1314C7.02917 18.2845 6.69274 17.4723 6.09389 16.8734C5.49504 16.2746 4.68283 15.9382 3.83593 15.9382C3.5534 15.932 3.27156 15.9686 3 16.0468" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                  <path d="M20.5971 16.0775C20.339 16.0034 20.0715 15.9668 19.803 15.9688C18.9561 15.9688 18.1438 16.3053 17.545 16.9041C16.9461 17.503 16.6097 18.3152 16.6097 19.1621C16.6056 19.4439 16.6393 19.7251 16.71 19.998" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" />
                </svg>
                {isMounted && totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-pink-50 border border-pink-300 rounded-full w-3.5 h-3.5 flex items-center justify-center text-[8px] font-medium text-black">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Shows only on mobile */}
      <div className="md:hidden px-6 py-4 bg-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.08)]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your Competition Suit"
            className="w-full px-4 py-3 pr-12 border border-gray-400 rounded-lg text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Logo & Actions Bar */}
      <div className="hidden md:block border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Phone (Desktop) / Menu (Mobile) */}
            <div className="flex items-center gap-2">
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
              <div className="hidden md:flex items-center gap-2 text-sm">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_1135)">
                    <path d="M16.3685 17.7086C14.2518 19.8336 9.38514 18.4003 5.53514 14.5086C1.68514 10.6169 0.168471 5.75026 2.29347 3.63359L4.61014 1.30859L9.08514 5.78359L7.41847 7.45026C7.0836 7.79014 6.89589 8.24813 6.89589 8.72526C6.89589 9.2024 7.0836 9.66038 7.41847 10.0003L10.0018 12.5836C10.342 12.921 10.8018 13.1103 11.281 13.1103C11.7601 13.1103 12.2199 12.921 12.5601 12.5836L14.2268 10.9169L18.7018 15.3919L16.3685 17.7086Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1135">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>{SITE_INFO.phone}</span>
              </div>
            </div>

            {/* Center - Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="Competition Suit Shop"
                width={250}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Right - Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/account/orders">
                <IconButton
                  icon={
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                  label="Account"
                />
              </Link>
              <IconButton
                icon={
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                }
                label="Wishlist"
              />
              <Link href="/cart">
                <IconButton
                  icon={
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  }
                  label="Cart"
                  badge={isMounted ? totalItems : 0}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Desktop */}
      <div className="hidden md:block border-b-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2">
          <div className="flex items-center justify-between gap-8">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg width="16" height="16" fill="currentColor">
                      <path d="m8 11-4-4h8l-4 4z" />
                    </svg>
                  )}
                </Link>
              ))}
            </nav>
            <SearchBar className="w-80" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};
