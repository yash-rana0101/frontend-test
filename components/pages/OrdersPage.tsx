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
      return 'bg-[#9BA100]/15 text-[#9BA100]';
    case 'Shipped':
      return 'bg-[#0B840B]/15 text-[#0B840B]';
    case 'Delivered':
      return 'bg-[#0B840B]/15 text-[#0B840B]';
    case 'Cancelled':
      return 'bg-[#8F6408]/15 text-[#8F6408]';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const OrdersPage: React.FC = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const selectedOrder = selectedOrderId ? mockOrders.find(order => order.id === selectedOrderId) : null;

  return (
    <div className="min-h-screen bg-white md:bg-transparent">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Big Container Box */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Account Box - Hidden on mobile, shown on desktop */}
          <aside className="hidden md:block md:w-[30%]">
            {/* User Profile */}
            <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-6 md:py-8">
              <div className="w-12 h-12 md:w-15 md:h-15 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                <span className="text-xl md:text-2xl font-semibold text-black font-['Montserrat',sans-serif]">
                  K
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-black font-['Montserrat',sans-serif]">
                Kathy Williams
              </h2>
            </div>

            {/* Menu Items */}
            <nav className="mt-4 md:mt-8">
              <Link
                href="/account/details"
                className="flex items-start justify-between px-4 md:px-10 py-4 md:py-6 hover:bg-gray-50 transition-colors border-b border-gray-200"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="text-sm md:text-base font-normal text-black font-['Montserrat',sans-serif]">
                    Account Details
                  </span>
                </div>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="/account/wishlist"
                className="flex items-start justify-between px-4 md:px-10 py-4 md:py-6 hover:bg-gray-50 transition-colors border-b border-gray-200"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm md:text-base font-normal text-black font-['Montserrat',sans-serif]">
                    Wishlist
                  </span>
                </div>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="/account/addresses"
                className="flex items-start justify-between px-4 md:px-10 py-4 md:py-6 hover:bg-gray-50 transition-colors border-b border-gray-200"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="text-sm md:text-base font-normal text-black font-['Montserrat',sans-serif]">
                    Saved Addresses
                  </span>
                </div>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="/account/orders"
                className="flex items-start justify-between px-4 md:px-10 py-4 md:py-6 hover:bg-gray-50 transition-colors border-b border-gray-200 bg-pink-50 md:bg-transparent"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
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
                  <span className="text-sm md:text-base font-medium md:font-normal text-black font-['Montserrat',sans-serif]">
                    Your Orders
                  </span>
                </div>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <button
                className="flex items-center gap-3 md:gap-4 px-4 md:px-11 py-4 md:py-6 hover:bg-gray-50 transition-colors w-full text-left"
                onClick={() => {
                  // Handle logout
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
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
                <span className="text-sm md:text-base font-normal text-black font-['Montserrat',sans-serif]">
                  Logout
                </span>
              </button>
            </nav>
          </aside>

          {/* Tab Content Box - Full width on mobile, 60% on desktop */}
          <main className="w-full md:w-[60%]">
            {/* Mobile: Simple header with no container */}
            {/* Desktop: Pink container with heading */}
            <div className="md:px-10 md:py-8 md:bg-pink-100 md:rounded-2xl md:space-y-8">
              {/* Tab Heading */}
              <div className="flex items-center mb-6 md:mb-8">
                {!selectedOrder ? (
                  <h1 className="text-base md:text-2xl font-medium md:font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.5px]">
                    Order history
                  </h1>
                ) : (
                  <button
                    onClick={() => setSelectedOrderId(null)}
                    className="flex items-center gap-2 px-4 md:px-5 py-2 border border-gray-300 bg-white rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5">
                      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm md:text-base font-normal text-black font-['Montserrat',sans-serif]">
                      Back
                    </span>
                  </button>
                )}
              </div>

              {/* Content Container */}
              <div className="bg-white md:rounded-2xl md:p-10">
                {!selectedOrder ? (
                  // Order List View
                  <div className="space-y-0">
                    {mockOrders.map((order, index) => (
                      <div key={order.id} className="bg-[#FCFCFC] md:bg-transparent">
                        <div className="flex gap-4 py-4 md:py-4">
                          {/* Product Image Placeholder */}
                          <div className="w-16 h-16 md:w-16 md:h-16 bg-[#FDF2F9] border border-[#F3BCDA] rounded flex items-center justify-center shrink-0">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 13.3359L8.33333 10.8359L11.6667 12.3511" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M13.3333 8.33333C12.4129 8.33333 11.6667 7.58714 11.6667 6.66667C11.6667 5.74619 12.4129 5 13.3333 5C14.2538 5 15 5.74619 15 6.66667C15 7.58714 14.2538 8.33333 13.3333 8.33333Z" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M14.0656 17.6037L15.8334 15.8359M17.6012 14.0682L15.8334 15.8359M15.8334 15.8359L14.0656 14.0682M15.8334 15.8359L17.6012 17.6037" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10.8333 17.5H3C2.72386 17.5 2.5 17.2761 2.5 17V3C2.5 2.72386 2.72386 2.5 3 2.5H17C17.2761 2.5 17.5 2.72386 17.5 3V10.8333" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 space-y-4 md:space-y-6">
                            <div className="space-y-4">
                              {/* Product Name, Quantity, Price Row */}
                              <div className="flex gap-6 items-start">
                                <h3 className="flex-1 text-base font-light text-black font-['Montserrat',sans-serif] tracking-[-0.08px] capitalize">
                                  {order.productName}
                                </h3>
                                <div className="flex items-center gap-6">
                                  {/* Quantity */}
                                  <div className="w-7 h-7 flex items-center justify-center border border-[rgba(0,0,0,0.25)] bg-[#FAFAFA] rounded text-base font-medium text-black text-center tracking-[0.5px] font-['Montserrat',sans-serif] p-0.5">
                                    {order.quantity}
                                  </div>
                                  {/* Price */}
                                  <div className="text-base font-medium text-black font-['Montserrat',sans-serif] tracking-[-0.5px]">
                                    $ {order.price.toFixed(2)}
                                  </div>
                                </div>
                              </div>

                              {/* Status and View Details Row */}
                              <div className="flex items-center justify-between">
                                {/* Status Badge */}
                                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)} font-['Montserrat',sans-serif] tracking-[-0.5px] whitespace-nowrap`}>
                                  {order.status}
                                </div>
                                {/* View Details Link */}
                                <button
                                  onClick={() => setSelectedOrderId(order.id)}
                                  className="text-base font-normal text-black underline hover:no-underline font-['Montserrat',sans-serif] tracking-[-0.5px]"
                                >
                                  view details
                                </button>
                              </div>
                            </div>

                            {/* Divider Line - Only show if not last item */}
                            {index < mockOrders.length - 1 && (
                              <div className="border-t border-gray-200"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Order Detail View
                  <div className="flex flex-col gap-6 md:space-y-6">
                    {/* Product Card */}
                    <div className="flex gap-4 items-center pb-4 border-b border-gray-200">
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-[#FDF2F9] border border-[#F3BCDA] rounded flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 13.3359L8.33333 10.8359L11.6667 12.3511" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.3333 8.33333C12.4129 8.33333 11.6667 7.58714 11.6667 6.66667C11.6667 5.74619 12.4129 5 13.3333 5C14.2538 5 15 5.74619 15 6.66667C15 7.58714 14.2538 8.33333 13.3333 8.33333Z" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.0656 17.6037L15.8334 15.8359M17.6012 14.0682L15.8334 15.8359M15.8334 15.8359L14.0656 14.0682M15.8334 15.8359L17.6012 17.6037" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.8333 17.5H3C2.72386 17.5 2.5 17.2761 2.5 17V3C2.5 2.72386 2.72386 2.5 3 2.5H17C17.2761 2.5 17.5 2.72386 17.5 3V10.8333" stroke="#E10174" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex gap-6 items-start">
                        <h3 className="flex-1 text-base font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.08px] capitalize">
                          {selectedOrder.productName}
                        </h3>
                        {/* Quantity */}
                        <div className="w-7 h-7 flex items-center justify-center border border-[rgba(0,0,0,0.25)] bg-[#FAFAFA] rounded text-base font-medium text-black text-center tracking-[0.5px] font-['Montserrat',sans-serif] p-0.5">
                          {selectedOrder.quantity}
                        </div>
                        {/* Price */}
                        <div className="text-base font-medium text-black font-['Montserrat',sans-serif] tracking-[-0.5px] pt-0.5">
                          $ {selectedOrder.price.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    {/* Measurement Section */}
                    <div className="flex flex-col gap-4 pb-6">
                      <div className="flex gap-2 items-center pb-2 border-b border-[rgba(0,0,0,0.16)]">
                        <h4 className="text-sm font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.5px] w-[117px]">
                          Measurement
                        </h4>
                        <div className="px-2 py-1 rounded-full text-xs font-semibold text-[#9ba100] font-['Montserrat',sans-serif] tracking-[-0.5px] w-[150px] text-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(155, 161, 0, 0.15) 0%, rgba(155, 161, 0, 0.15) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
                          Pending
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <ul className="text-sm font-light text-black font-['Montserrat',sans-serif] tracking-[-0.5px] list-disc pl-5 space-y-1">
                          <li className="leading-[1.5]">Order will be created once you provide your measurements</li>
                          <li className="leading-[1.5]">Rest assured, our team will help you with measurement</li>
                        </ul>
                        <button className="bg-[#E10174] text-white px-4 py-3 rounded-lg text-l  font-['Montserrat',sans-serif] tracking-[-0.5px] hover:bg-[#C00060] transition-colors w-fit">
                          Provide Measurment
                        </button>
                      </div>
                    </div>

                    {/* Payment Section */}
                    <div className="flex flex-col gap-4 pb-6">
                      <div className="flex gap-2 items-center pb-2 border-b border-[rgba(0,0,0,0.16)]">
                        <h4 className="text-sm font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.5px] w-[117px]">
                          Payment
                        </h4>
                        <div className="px-2 py-1 rounded-full text-xs font-semibold text-[#0b840b] font-['Montserrat',sans-serif] tracking-[-0.5px] w-[150px] text-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(11, 132, 11, 0.15) 0%, rgba(11, 132, 11, 0.15) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
                          Paid Full
                        </div>
                      </div>
                      <p className="text-base font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.5px]">
                        via PayPal
                      </p>
                    </div>

                    {/* Shipping Address Section */}
                    <div className="flex flex-col gap-4 pb-6">
                      <div className="flex gap-2 items-center pb-2 border-b border-[rgba(0,0,0,0.16)]">
                        <h4 className="text-sm font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.5px] whitespace-nowrap">
                          Shipping Address
                        </h4>
                        <div className="px-2 py-1 rounded-full text-xs font-semibold text-[#9ba100] font-['Montserrat',sans-serif] tracking-[-0.5px] w-[150px] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(155, 161, 0, 0.15) 0%, rgba(155, 161, 0, 0.15) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
                          Measurement Pending
                        </div>
                      </div>
                      <p className="text-base font-normal text-black font-['Montserrat',sans-serif] tracking-[-0.5px]">
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
