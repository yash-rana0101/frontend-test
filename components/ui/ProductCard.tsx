'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/CartContext';
import { CartItem } from '@/lib/types';

interface ProductCardProps {
  product: Omit<CartItem, 'quantity'>;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <Link href="/cart">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-full aspect-square overflow-hidden"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.discountPercentage > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="absolute top-2 right-2 bg-[#0b840b] text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {product.discountPercentage}% OFF
            </motion.div>
          )}
        </motion.div>
      </Link>

      <div className="p-4 space-y-3">
        <Link href="/cart">
          <h3 className="text-base font-light tracking-tight capitalize leading-snug hover:text-[#e10174] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.code}</p>
        </Link>

        <div className="flex items-center gap-2">
          <span className="relative inline-block text-base font-medium text-gray-500">
            $ {product.originalPrice.toFixed(2)}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-500" />
          </span>
          <span className="text-lg font-semibold text-black">
            $ {product.discountedPrice.toFixed(2)}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full bg-[#e10174] text-white py-2.5 rounded-full font-semibold text-sm hover:bg-[#c00163] transition-colors"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};
