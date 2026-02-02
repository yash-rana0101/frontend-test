'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/lib/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, deliveryFee, total } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleIncrement = (id: string, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3,
      },
    },
  } as const;

  const summaryVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  } as const;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#fcfcfc] py-8 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Shopping Bag Section */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Header */}
              <div className="border-b border-black/50 px-6 py-4">
                <h1 className="text-lg font-medium tracking-tight capitalize">
                  Shopping Bag
                </h1>
              </div>

              {/* Cart Items */}
              <div className="p-6">
                {!isMounted ? (
                  <div className="text-center py-12">
                    <div className="animate-pulse">
                      <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
                    </div>
                  </div>
                ) : items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <svg
                      className="mx-auto h-24 w-24 text-gray-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Start shopping to add items to your cart
                    </p>
                    <Link
                      href="/"
                      className="inline-block bg-[#e10174] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c00163] transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {items.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <motion.div
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          layout
                          className="flex gap-4 mb-6"
                        >
                          {/* Product Image */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-16 h-16 shrink-0 rounded overflow-hidden"
                          >
                            <Image
                              src="/images/products/image.png"
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </motion.div>

                          {/* Product Details */}
                          <div className="flex-1 flex gap-2">
                            <div className="flex-1 space-y-4">
                              {/* Product Name */}
                              <h3 className="text-base font-light tracking-tight capitalize leading-6">
                                {item.name} ({item.code})
                              </h3>

                              {/* Discount Badge */}
                              <div className="flex items-center gap-2">
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.2, type: 'spring' }}
                                  className="inline-flex items-center px-4 py-1 rounded-full bg-[#0b840b] text-white text-sm font-medium"
                                >
                                  {item.discountPercentage}% OFF
                                </motion.span>
                                <span className="text-[#0b840b] text-base">
                                  Savings on this order
                                </span>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-1">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleDecrement(item.id, item.quantity)}
                                  className="w-12 h-12 flex items-center justify-center border border-black/25 rounded bg-[#fafafa] hover:bg-gray-100 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M6 12h12"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </motion.button>
                                <motion.div
                                  key={item.quantity}
                                  initial={{ scale: 1.2 }}
                                  animate={{ scale: 1 }}
                                  className="w-12 h-12 flex items-center justify-center border border-black/25 rounded bg-[#fafafa] font-medium text-base"
                                >
                                  {item.quantity}
                                </motion.div>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleIncrement(item.id, item.quantity)}
                                  className="w-12 h-12 flex items-center justify-center border border-black/25 rounded bg-[#fafafa] hover:bg-gray-100 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M12 6v12M6 12h12"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </motion.button>
                              </div>
                            </div>

                            {/* Price and Remove */}
                            <div className="flex flex-col items-end justify-between w-18">
                              <div className="text-right space-y-1">
                                <div className="relative inline-block">
                                  <span className="text-base font-medium text-gray-500 tracking-tight">
                                    $ {item.originalPrice.toFixed(2)}
                                  </span>
                                  <div className="absolute top-1/2 left-0 w-full h-px bg-gray-500" />
                                </div>
                                <motion.div
                                  key={`price-${item.quantity}`}
                                  initial={{ scale: 1.1 }}
                                  animate={{ scale: 1 }}
                                  className="text-base font-semibold text-black tracking-tight"
                                >
                                  $ {(item.discountedPrice * item.quantity).toFixed(2)}
                                </motion.div>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleRemove(item.id)}
                                className="w-12 h-12 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                                aria-label="Remove item"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M16 6L14 18H6L4 6M9 9v6m2-6v6M2 6h16M8 6V4h4v2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                        {index < items.length - 1 && (
                          <motion.hr
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-200 mb-6 origin-left"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </AnimatePresence>
                )
                }
              </div>
            </div>
          </motion.div>

          {/* Payment Summary Section */}
          <motion.div
            variants={summaryVariants}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-lg shadow-sm sticky top-24">
              {/* Discount Section */}
              <div className="p-6 border-b border-black/50">
                <h2 className="text-lg font-medium tracking-tight capitalize mb-6">
                  Discount
                </h2>
                <div className="flex gap-2">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Enter discount code"
                    className="flex-1 h-12 px-4 border-[1.4px] border-[#f3bcda] bg-[#fdf2f9] rounded focus:outline-none focus:ring-2 focus:ring-[#e10174]"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 h-12 bg-[#f3bcda] rounded font-medium text-base tracking-tight hover:bg-[#e10174] hover:text-white transition-colors"
                  >
                    Apply
                  </motion.button>
                </div>
              </div>

              <hr className="border-t border-gray-200" />

              {/* Payment Summary */}
              <div className="p-6">
                <h2 className="text-lg font-medium tracking-tight capitalize pb-4 border-b border-black/50 mb-6">
                  Payment Summary
                </h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center text-base tracking-tight">
                    <span className="font-normal">Subtotal</span>
                    <motion.span
                      key={`subtotal-${subtotal}`}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="font-medium"
                    >
                      $ {isMounted ? subtotal.toFixed(2) : '0.00'}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center text-base tracking-tight">
                    <span className="font-normal">Delivery fee</span>
                    <span className="font-medium">$ {isMounted ? deliveryFee.toFixed(2) : '0.00'}</span>
                  </div>

                  <hr className="border-t border-gray-200" />

                  <div className="flex justify-between items-center text-base tracking-tight">
                    <span className="font-normal">Total</span>
                    <motion.span
                      key={`total-${total}`}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="font-medium"
                    >
                      $ {isMounted ? total.toFixed(2) : '0.00'}
                    </motion.span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={items.length === 0}
                    className="w-full h-12 bg-[#e10174] text-white rounded-full font-semibold text-base tracking-tight hover:bg-[#c00163] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Checkout
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
