'use client';

import React from 'react';
import Link from 'next/link';

export const AccountMenuPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-4 py-6">
        {/* User Profile */}
        <div className="flex items-center gap-3 px-4 py-6 mb-4">
          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
            <span className="text-xl font-semibold text-black font-['Montserrat',sans-serif]">
              K
            </span>
          </div>
          <h2 className="text-xl font-semibold text-black font-['Montserrat',sans-serif]">
            Kathy Williams
          </h2>
        </div>

        {/* Menu Items */}
        <nav>
          <Link
            href="/account/details"
            className="flex items-start justify-between px-4 py-4 hover:bg-gray-50 active:bg-pink-50 transition-colors border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-sm font-normal text-black font-['Montserrat',sans-serif]">
                Account Details
              </span>
            </div>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/account/wishlist"
            className="flex items-start justify-between px-4 py-4 hover:bg-gray-50 active:bg-pink-50 transition-colors border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-normal text-black font-['Montserrat',sans-serif]">
                Wishlist
              </span>
            </div>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/account/addresses"
            className="flex items-start justify-between px-4 py-4 hover:bg-gray-50 active:bg-pink-50 transition-colors border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-sm font-normal text-black font-['Montserrat',sans-serif]">
                Saved Addresses
              </span>
            </div>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/account/orders"
            className="flex items-start justify-between px-4 py-4 hover:bg-gray-50 active:bg-pink-50 transition-colors border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
                <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-sm font-medium text-black font-['Montserrat',sans-serif]">
                Your Orders
              </span>
            </div>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 active:bg-pink-50 transition-colors w-full text-left border-b border-gray-200"
            onClick={() => {
              // Handle logout
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-normal text-black font-['Montserrat',sans-serif]">
              Logout
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
};
