import { SiteImage } from '@/types';

// Default images (fallback)
export const defaultImages: SiteImage[] = [
  {
    id: 'hero',
    name: 'Hero Image',
    category: 'hero',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=1200',
    publicId: 'hero_default',
    uploadedAt: new Date(),
  },
  {
    id: 'product1',
    name: 'iPhone 15 Pro Max',
    category: 'product',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    publicId: 'product1_default',
    uploadedAt: new Date(),
  },
  {
    id: 'product2',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'product',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    publicId: 'product2_default',
    uploadedAt: new Date(),
  },
  {
    id: 'product3',
    name: 'MacBook Air M3',
    category: 'product',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400',
    publicId: 'product3_default',
    uploadedAt: new Date(),
  },
  {
    id: 'about',
    name: 'About Us Image',
    category: 'about',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    publicId: 'about_default',
    uploadedAt: new Date(),
  },
];

// Simple way to get a specific image
export function getSiteImage(id: string, images?: SiteImage[]): SiteImage {
  const allImages = images || defaultImages;
  return allImages.find(img => img.id === id) || defaultImages.find(img => img.id === id)!;
}
