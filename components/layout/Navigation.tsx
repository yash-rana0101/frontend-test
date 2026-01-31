'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SITE_INFO } from '@/lib/constants';
import { SearchBar } from '@/components/ui/SearchBar';
import { IconButton } from '@/components/ui/IconButton';

export const Navigation: React.FC = () => {
  const [cartCount] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Banner */}
      <div className="hidden md:block bg-pink-100 text-center py-3 text-sm border-b-4 border-pink-200">
        <p>Reach us on Instagram {SITE_INFO.instagram}, and our seasoned experts will personally guide you</p>
      </div>

      {/* Logo & Actions Bar */}
      <div className="border-b">
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
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{SITE_INFO.phone}</span>
              </div>
            </div>

            {/* Center - Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
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
              <IconButton
                icon={
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                }
                label="Cart"
                badge={cartCount}
              />
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

      {/* Search Bar - Mobile */}
      <div className="md:hidden px-4 pb-4">
        <SearchBar />
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
    </header>
  );
};
