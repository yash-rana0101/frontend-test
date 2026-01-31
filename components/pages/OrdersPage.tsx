'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface OrderItem {
  id: string;
  productName: string;
  address: string;
  status: 'Measurement Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  quantity: number;
  price: number;
}

const mockOrders: OrderItem[] = [
  {
    id: '1',
    productName: 'Product Name',
    address: 'Address XYZ',
    status: 'Measurement Pending',
    quantity: 1,
    price: 379.0,
  },
  {
    id: '2',
    productName: 'Product Name',
    address: 'Address XYZ',
    status: 'Shipped',
    quantity: 1,
    price: 379.0,
  },
  {
    id: '3',
    productName: 'Product Name',
    address: 'Address XYZ',
    status: 'Delivered',
    quantity: 1,
    price: 379.0,
  },
  {
    id: '4',
    productName: 'Product Name',
    address: 'Address XYZ',
    status: 'Cancelled',
    quantity: 1,
    price: 379.0,
  },
];

const getStatusColor = (status: OrderItem['status']) => {
  switch (status) {
    case 'Measurement Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Shipped':
      return 'bg-green-100 text-green-800';
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'Cancelled':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const OrdersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('orders');

  return (
    <div className="min-h-screen bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-108 shrink-0">
            <div className="bg-white rounded-2xl p-0 shadow-sm">
              {/* User Profile */}
              <div className="flex items-center gap-4 p-6 border-b">
                <div className="w-15 h-15 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-black font-['Montserrat',sans-serif]">
                    K
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-black font-['Montserrat',sans-serif]">
                  Kathy Williams
                </h2>
              </div>

              {/* Menu Items */}
              <nav className="py-4">
                <Link
                  href="/account/details"
                  className={`flex items-center justify-between px-6 py-6 hover:bg-gray-50 transition-colors border-b ${activeTab === 'details' ? 'bg-pink-50/50' : ''
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                      Account Details
                    </span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  href="/account/wishlist"
                  className={`flex items-center justify-between px-6 py-6 hover:bg-gray-50 transition-colors border-b ${activeTab === 'wishlist' ? 'bg-pink-50/50' : ''
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                      Wishlist
                    </span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  href="/account/addresses"
                  className={`flex items-center justify-between px-6 py-6 hover:bg-gray-50 transition-colors border-b ${activeTab === 'addresses' ? 'bg-pink-50/50' : ''
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                      Saved Addresses
                    </span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link
                  href="/account/orders"
                  className={`flex items-center justify-between px-6 py-6 hover:bg-gray-50 transition-colors border-b bg-pink-50/50`}
                >
                  <div className="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <span className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                      Your Orders
                    </span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <button
                  className="flex items-center gap-4 px-6 py-6 hover:bg-gray-50 transition-colors w-full text-left"
                  onClick={() => {
                    // Handle logout
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <span className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                    Logout
                  </span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-10">
                <h1 className="text-2xl font-semibold text-black mb-8 font-['Montserrat',sans-serif]">
                  Order History
                </h1>

                <div className="space-y-0">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border-b border-gray-200 last:border-b-0 py-4">
                      <div className="flex gap-5">
                        {/* Product Image Placeholder */}
                        <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center shrink-0">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M14 3H6L2 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-4-4z"
                              stroke="#E10174"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-base font-medium text-black mb-1 font-['Montserrat',sans-serif]">
                              {order.productName}
                            </h3>
                            <p className="text-sm text-gray-600 font-['Montserrat',sans-serif]">
                              {order.address}
                            </p>
                          </div>

                          <div className="flex items-center gap-6">
                            {/* Status Badge */}
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </div>

                            {/* Quantity */}
                            <div className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-sm font-medium">
                              {order.quantity}
                            </div>

                            {/* Price & View Details */}
                            <div className="text-right min-w-22">
                              <div className="text-base font-medium text-black mb-2 font-['Montserrat',sans-serif]">
                                $ {order.price.toFixed(2)}
                              </div>
                              <Link
                                href={`/account/orders/${order.id}`}
                                className="text-sm text-black underline hover:no-underline font-['Montserrat',sans-serif]"
                              >
                                view details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
