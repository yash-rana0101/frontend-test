// Type definitions for the application

export interface StoryItem {
  id: string;
  name: string;
  achievement: string;
  category: string;
  testimonial: string;
  image: string;
  rating: number;
  productLink?: string;
  productName?: string;
  productImage?: string;
}

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface CartItem {
  id: string;
  name: string;
  code: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
}
