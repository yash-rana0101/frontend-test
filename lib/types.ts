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
