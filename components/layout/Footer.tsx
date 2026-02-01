'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_INFO, FOOTER_SECTIONS } from '@/lib/constants';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-t-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        {/* Main Footer Content - Desktop Layout */}
        <div className="hidden md:flex gap-6 mb-12">
          {/* Left Side: Brand & Contact */}
          <div className="flex-shrink-0" style={{ width: '270px' }}>
            <div className="mb-4">
              <Image
                src="/images/logo/logo.png"
                alt="Competition Suit Shop"
                width={269}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </div>
            <div className="space-y-4 text-sm">
              <Link
                href={`https://instagram.com/${SITE_INFO.instagram.replace('@', '')}`}
                target="_blank"
                className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0895 2H4.91048C3.30306 2 2 3.30306 2 4.91048V15.0895C2 16.6969 3.30306 18 4.91048 18H15.0895C16.6969 18 18 16.6969 18 15.0895V4.91048C18 3.30306 16.6969 2 15.0895 2Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M10.0093 13.6436C12.0164 13.6436 13.6436 12.0164 13.6436 10.0093C13.6436 8.00213 12.0164 6.375 10.0093 6.375C8.00213 6.375 6.375 8.00213 6.375 10.0093C6.375 12.0164 8.00213 13.6436 10.0093 13.6436Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M14.7145 6.37436C15.3163 6.37436 15.804 5.88656 15.804 5.28484C15.804 4.68311 15.3163 4.19531 14.7145 4.19531C14.1128 4.19531 13.625 4.68311 13.625 5.28484C13.625 5.88656 14.1128 6.37436 14.7145 6.37436Z" fill="black" />
                </svg>
                <span>{SITE_INFO.instagram}</span>
              </Link>
              <Link
                href={`https://www.youtube.com/@${SITE_INFO.name.replace(/\s+/g, '')}`}
                target="_blank"
                className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5667 2.83594H4.43333C2.67523 2.83594 1.25 4.26116 1.25 6.01927V13.9693C1.25 15.7274 2.67523 17.1526 4.43333 17.1526H15.5667C17.3248 17.1526 18.75 15.7274 18.75 13.9693V6.01927C18.75 4.26116 17.3248 2.83594 15.5667 2.83594Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M13.3333 9.9974L7.5 13.3307V6.66406L13.3333 9.9974Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                </svg>
                <span>{SITE_INFO.name}</span>
              </Link>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 3.63281H1.25V16.3578H18.75V3.63281Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M1.25 3.63281L10 12.3828L18.75 3.63281" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                </svg>
                <span>{SITE_INFO.email}</span>
              </a>
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3685 17.7125C14.2518 19.8375 9.38514 18.4042 5.53514 14.5125C1.68514 10.6208 0.168471 5.75417 2.29347 3.6375L4.61014 1.3125L9.08514 5.7875L7.41847 7.45417C7.0836 7.79405 6.89589 8.25203 6.89589 8.72917C6.89589 9.2063 7.0836 9.66428 7.41847 10.0042L10.0018 12.5875C10.342 12.9249 10.8018 13.1142 11.281 13.1142C11.7601 13.1142 12.2199 12.9249 12.5601 12.5875L14.2268 10.9208L18.7018 15.3958L16.3685 17.7125Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                </svg>
                <span>{SITE_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Sections */}
          <div className="flex-1 flex flex-col gap-16">
            {/* Top Row: Company and Resources */}
            <div className="flex gap-6">
              {/* Company Section */}
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-4 font-['Montserrat',sans-serif]">{FOOTER_SECTIONS.company.title}</h3>
                <div className="flex gap-6">
                  <ul className="flex-1 space-y-3 text-sm">
                    {FOOTER_SECTIONS.company.links.slice(0, 5).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex-1 space-y-3 text-sm">
                    {FOOTER_SECTIONS.company.links.slice(5).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Resources Section */}
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-4 font-['Montserrat',sans-serif]">{FOOTER_SECTIONS.resources.title}</h3>
                <div className="flex gap-6">
                  <ul className="flex-1 space-y-3 text-sm">
                    {FOOTER_SECTIONS.resources.links.slice(0, 4).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex-1 space-y-3 text-sm">
                    {FOOTER_SECTIONS.resources.links.slice(4).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Row: Help Center */}
            <div>
              <h3 className="font-medium text-lg mb-4 font-['Montserrat',sans-serif]">{FOOTER_SECTIONS.help.title}</h3>
              <div className="grid grid-cols-4 gap-6">
                <ul className="space-y-3 text-sm">
                  {FOOTER_SECTIONS.help.links.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 text-sm">
                  {FOOTER_SECTIONS.help.links.slice(3, 5).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 text-sm">
                  {FOOTER_SECTIONS.help.links.slice(5, 7).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 text-sm">
                  {FOOTER_SECTIONS.help.links.slice(7).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-gray-600 transition-colors leading-[1.5]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-1 gap-8 mb-12">
          {/* Brand & Contact */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Competition Suit Shop"
                width={200}
                height={40}
                className="h-4 w-auto"
                priority
              />
            </div>
            <div className="space-y-4 text-sm">
              <Link
                href={`https://instagram.com/${SITE_INFO.instagram.replace('@', '')}`}
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0895 2H4.91048C3.30306 2 2 3.30306 2 4.91048V15.0895C2 16.6969 3.30306 18 4.91048 18H15.0895C16.6969 18 18 16.6969 18 15.0895V4.91048C18 3.30306 16.6969 2 15.0895 2Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M10.0093 13.6436C12.0164 13.6436 13.6436 12.0164 13.6436 10.0093C13.6436 8.00213 12.0164 6.375 10.0093 6.375C8.00213 6.375 6.375 8.00213 6.375 10.0093C6.375 12.0164 8.00213 13.6436 10.0093 13.6436Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M14.7145 6.37436C15.3163 6.37436 15.804 5.88656 15.804 5.28484C15.804 4.68311 15.3163 4.19531 14.7145 4.19531C14.1128 4.19531 13.625 4.68311 13.625 5.28484C13.625 5.88656 14.1128 6.37436 14.7145 6.37436Z" fill="black" />
                </svg>
                <span>{SITE_INFO.instagram}</span>
              </Link>
              <Link
                href={`https://www.youtube.com/@${SITE_INFO.name.replace(/\s+/g, '')}`}
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5667 2.83594H4.43333C2.67523 2.83594 1.25 4.26116 1.25 6.01927V13.9693C1.25 15.7274 2.67523 17.1526 4.43333 17.1526H15.5667C17.3248 17.1526 18.75 15.7274 18.75 13.9693V6.01927C18.75 4.26116 17.3248 2.83594 15.5667 2.83594Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M13.3333 9.9974L7.5 13.3307V6.66406L13.3333 9.9974Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                </svg>
                <span>{SITE_INFO.name}</span>
              </Link>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 3.63281H1.25V16.3578H18.75V3.63281Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                  <path d="M1.25 3.63281L10 12.3828L18.75 3.63281" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                </svg>
                <span>{SITE_INFO.email}</span>
              </a>
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3685 17.7125C14.2518 19.8375 9.38514 18.4042 5.53514 14.5125C1.68514 10.6208 0.168471 5.75417 2.29347 3.6375L4.61014 1.3125L9.08514 5.7875L7.41847 7.45417C7.0836 7.79405 6.89589 8.25203 6.89589 8.72917C6.89589 9.2063 7.0836 9.66428 7.41847 10.0042L10.0018 12.5875C10.342 12.9249 10.8018 13.1142 11.281 13.1142C11.7601 13.1142 12.2199 12.9249 12.5601 12.5875L14.2268 10.9208L18.7018 15.3958L16.3685 17.7125Z" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinejoin="round" />
                </svg>
                <span>{SITE_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Footer Links - Mobile: Stacked */}
          <div className="grid grid-cols-1 gap-8">
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
        <div className="border-t pt-8 border-gray-400/30">
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