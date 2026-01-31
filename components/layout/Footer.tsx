'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_INFO, FOOTER_SECTIONS } from '@/lib/constants';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-t-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand & Contact */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Competition Suit Shop"
                width={200}
                height={40}
                className="h-4 md:h-10 w-auto"
                priority
              />
            </div>
            <div className="space-y-4 text-sm">
              <Link
                href={`https://instagram.com/${SITE_INFO.instagram.replace('@', '')}`}
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span>{SITE_INFO.instagram}</span>
              </Link>
              <Link
                href={`https://www.facebook.com/${SITE_INFO.name}`}
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>{SITE_INFO.name}</span>
              </Link>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{SITE_INFO.email}</span>
              </a>
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{SITE_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Footer Links - Mobile: Stacked, Desktop: 3 columns */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{FOOTER_SECTIONS.company.title}</h3>
              <ul className="space-y-3 text-sm">
                {FOOTER_SECTIONS.company.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{FOOTER_SECTIONS.resources.title}</h3>
              <ul className="space-y-3 text-sm">
                {FOOTER_SECTIONS.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Center */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{FOOTER_SECTIONS.help.title}</h3>
              <ul className="space-y-3 text-sm">
                {FOOTER_SECTIONS.help.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">{SITE_INFO.copyright}</p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">We Accept:</span>
              <div className="flex items-center gap-2">
                <div className="h-6 px-2 bg-gray-100 rounded flex items-center text-xs font-medium">Visa</div>
                <div className="h-6 px-2 bg-gray-100 rounded flex items-center text-xs font-medium">Mastercard</div>
                <div className="h-6 px-2 bg-gray-100 rounded flex items-center text-xs font-medium">Amex</div>
                <div className="h-6 px-2 bg-gray-100 rounded flex items-center text-xs font-medium">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
