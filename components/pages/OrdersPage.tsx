'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface OrderItem {
  id: string;
  productName: string;
  itemDescription: string;
  status: 'Measurement Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  quantity: number;
  price: number;
}

const mockOrders: OrderItem[] = [
  {
    id: '1',
    productName: 'Product Name',
    itemDescription: 'Item ⏵ FREE Padded Cups (Worth $99)',
    status: 'Measurement Pending',
    quantity: 1,
    price: 379.0,
  },
  {
    id: '2',
    productName: 'Product Name',
    itemDescription: 'Item ⏵ FREE Padded Cups (Worth $99)',
    status: 'Shipped',
    quantity: 1,
    price: 379.0,
  },
  {
    id: '3',
    productName: 'Product Name',
    itemDescription: 'Item ⏵ FREE Padded Cups (Worth $99)',
    status: 'Delivered',
    quantity: 1,
    price: 379.0,
  },
  {
    id: '4',
    productName: 'Product Name',
    itemDescription: 'Item ⏵ FREE Padded Cups (Worth $99)',
    status: 'Cancelled',
    quantity: 1,
    price: 379.0,
  },
];

const getStatusColor = (status: OrderItem['status']) => {
  switch (status) {
    case 'Measurement Pending':
      return 'bg-yellow-100 text-yellow-700';
    case 'Shipped':
      return 'bg-green-100 text-green-700';
    case 'Delivered':
      return 'bg-green-100 text-green-700';
    case 'Cancelled':
      return 'bg-[#F5E6D3] text-[#8B7355]';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const OrdersPage: React.FC = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const selectedOrder = selectedOrderId ? mockOrders.find(order => order.id === selectedOrderId) : null;

  return (
    <div className="min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        {/* Big Container Box */}
        <div className="flex gap-12">
          {/* Account Box - 30% width, no background, no borders */}
          <aside className="w-[30%]">
            {/* User Profile */}
            <div className="flex items-center gap-4 px-6 py-8">
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
            <nav className="mt-8">
              <Link
                href="/account/details"
                className="flex items-start justify-between px-10 py-6 hover:bg-gray-50 transition-colors border-b border-gray-200"
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
                className="flex items-start justify-between px-10 py-6 hover:bg-gray-50 transition-colors border-b border-gray-200"
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
                className="flex items-start justify-between px-10 py-6 hover:bg-gray-50 transition-colors border-b border-gray-200"
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
                className="flex items-start justify-between px-10 py-6 hover:bg-gray-50 transition-colors border-b border-gray-200"
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
                className="flex items-center jus gap-4 px-11 py-6 hover:bg-gray-50 transition-colors w-full text-left"
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
          </aside>

          {/* Tab Content Box - 60% width */}
          <main className="w-[60%]">
            {/* Complete Content Box */}
            <div className="px-10 py-8 bg-pink-100 rounded-2xl space-y-8">
              {/* Tab Heading at top left */}
              <div className="flex items-center mb-8">
                {!selectedOrder ? (
                  <h1 className="text-2xl text-black font-['Montserrat',sans-serif]">
                    Order history
                  </h1>
                ) : (
                  <button
                    onClick={() => setSelectedOrderId(null)}
                    className="flex items-center gap-2 px-5 py-2 border border-gray-300 bg-white rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                      Back
                    </span>
                  </button>
                )}
              </div>

              {/* Content Container Box with pink shade background */}
              <div className="bg-white rounded-2xl p-10">
                {!selectedOrder ? (
                  // Order List View
                  <div className="space-y-0">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="py-4">
                        <div className="flex gap-5">
                          {/* Product Image Placeholder */}
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shrink-0">
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
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <div className="flex-1">
                                <h3 className="text-base font-medium text-black mb-1 font-['Montserrat',sans-serif]">
                                  {order.productName}
                                </h3>
                                <p className="text-sm text-gray-600 font-['Montserrat',sans-serif]">
                                  {order.itemDescription}
                                </p>
                              </div>

                              <div className="flex items-center gap-6">
                                {/* Status Badge */}
                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                  {order.status}
                                </div>

                                {/* Quantity */}
                                <div className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-sm font-medium bg-white">
                                  {order.quantity}
                                </div>

                                {/* Price & View Details */}
                                <div className="text-right min-w-22">
                                  <div className="text-base font-medium text-black mb-2 font-['Montserrat',sans-serif]">
                                    $ {order.price.toFixed(2)}
                                  </div>
                                  <button
                                    onClick={() => setSelectedOrderId(order.id)}
                                    className="text-sm text-black underline hover:no-underline font-['Montserrat',sans-serif]"
                                  >
                                    view details
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="border-b border-gray-200 mt-6"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Order Detail View
                  <div className="space-y-6">
                    {/* Product Header */}
                    <div className="flex items-center gap-5 pb-6">
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
                      <div className="flex-1 flex items-center justify-between">
                        <h3 className="text-base font-medium text-black font-['Montserrat',sans-serif]">
                          {selectedOrder.productName}
                        </h3>
                        <div className="flex items-center gap-4">
                          <div className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-sm font-medium">
                            {selectedOrder.quantity}
                          </div>
                          <div className="text-base font-medium text-black font-['Montserrat',sans-serif]">
                            $ {selectedOrder.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Measurement Section */}
                    <div className="space-y-4 pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-4">
                        <h4 className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                          Measurement
                        </h4>
                        <div className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-medium">
                          Pending
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 font-['Montserrat',sans-serif] list-disc pl-5">
                        <li>Order will be created once you provide your measurements</li>
                        <li>Rest assured, our team will help you with measurement</li>
                      </ul>
                      <button className="bg-[#E10174] text-white px-6 py-3 rounded-lg text-base font-medium font-['Montserrat',sans-serif] hover:bg-[#C00060] transition-colors">
                        Provide Measurment
                      </button>
                    </div>

                    {/* Payment Section */}
                    <div className="space-y-4 pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-4">
                        <h4 className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                          Payment
                        </h4>
                        <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-medium">
                          Paid Full
                        </div>
                      </div>
                      <p className="text-base text-black font-['Montserrat',sans-serif]">
                        via PayPal
                      </p>
                    </div>

                    {/* Shipping Address Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <h4 className="text-base font-normal text-black font-['Montserrat',sans-serif]">
                          Shipping Address
                        </h4>
                        <div className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-medium">
                          Measurement Pending
                        </div>
                      </div>
                      <p className="text-base text-black font-['Montserrat',sans-serif]">
                        2631 Co Rd 86, Cripple Creek, CO 80813, United States
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
