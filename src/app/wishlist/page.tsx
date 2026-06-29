'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ShoppingCart,
  Share2,
  Plus,
  Minus,
  ChevronRight,
  Grid3X3,
  List,
  Clock,
  Trash2,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';

// Demo products
const demoWishlistItems = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    inStock: true,
  },
  {
    id: '2',
    name: 'MacBook Air M2 256GB SSD',
    price: 1450000,
    image: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400',
    inStock: true,
  },
  {
    id: '3',
    name: 'AirPods Pro 2nd Gen',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
    inStock: true,
  },
  {
    id: '4',
    name: 'Apple Watch Series 9',
    price: 550000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400',
    inStock: true,
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1320000,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    inStock: true,
  },
  {
    id: '6',
    name: 'iPad Air 8th Gen 64GB',
    price: 800000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    inStock: true,
  },
];

const youMayAlsoLike = [
  {
    id: '7',
    name: 'Sony WH-1000XM5',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
  },
  {
    id: '8',
    name: 'Anker PowerCore 20000',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1542744095-09a079385371?w=300',
  },
  {
    id: '9',
    name: 'Logitech MX Master 3S',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300',
  },
];

// Format price as ₦
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price).replace('NGN', '₦');
};

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const items = demoWishlistItems;

  const handleAddToCart = (item: typeof demoWishlistItems[0]) => {
    if (isHydrated) {
      addToCart({
        productId: item.id,
        productName: item.name,
        productImage: item.image,
        price: item.price,
        quantity: 1,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-gray-400 text-xs mb-6 flex items-center justify-between">
          <div>
            Home <span className="mx-2">/</span> <span className="text-white">My Wishlist</span>
          </div>
          <div className="flex items-center gap-1 text-gold text-xs cursor-pointer hover:underline">
            <Share2 className="h-3 w-3" />
            Share Wishlist
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Heart className="h-6 w-6 text-gold fill-gold" />
          My Wishlist
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
              <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">WISHLIST</h3>
              <nav className="space-y-1">
                <Link href="/wishlist" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gold text-primary-black">
                  <Heart className="h-4 w-4 fill-current" />
                  My Wishlist ({items.length})
                </Link>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white w-full text-left">
                  <Clock className="h-4.5 w-4.5" />
                  Recently Viewed
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white w-full text-left">
                  <ShieldCheck className="h-4.5 w-4.5" />
                  Compare Products
                </button>
              </nav>

              <div className="mt-6 pt-4 border-t border-gray-800">
                <h3 className="text-gold font-bold mb-2 text-sm flex items-center gap-2">
                  <Heart className="h-3.5 w-3.5" />
                  Wishlist Tips
                </h3>
                <p className="text-gray-400 text-xs mb-3">Add items you love to your wishlist. Review them anytime and easily move to cart.</p>
                <Button className="w-full bg-gold hover:bg-gold/90 text-primary-black text-xs font-bold">
                  SHOP NOW →
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Main Content */}
          <div className="flex-1 space-y-8">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                <span className="text-white font-semibold">{items.length} Items</span>
              </div>
              <div className="flex items-center gap-4">
                <select className="bg-gray-800 border border-gray-700 text-sm text-white rounded-md px-3 py-1.5 outline-none focus:border-gold">
                  <option>All Categories</option>
                  <option>Smartphones</option>
                  <option>Laptops</option>
                  <option>Accessories</option>
                </select>
                <select className="bg-gray-800 border border-gray-700 text-sm text-white rounded-md px-3 py-1.5 outline-none focus:border-gold">
                  <option>Recently Added</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="flex items-center gap-1 border border-gray-700 rounded-md overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`w-8 h-8 flex items-center justify-center ${viewMode === 'grid' ? 'bg-gold text-primary-black' : 'bg-gray-800 text-gray-400'}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`w-8 h-8 flex items-center justify-center ${viewMode === 'list' ? 'bg-gold text-primary-black' : 'bg-gray-800 text-gray-400'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Wishlist Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => {
                const isInWishlist = true; // since we're showing demo items
                return (
                  <div key={item.id} className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden group">
                    <div className="relative">
                      <div className="aspect-square bg-gray-800">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Remove button */}
                      <button
                        onClick={() => isHydrated && toggleWishlist(item.id)}
                        className="absolute top-3 right-3 w-7 h-7 bg-black/60 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="p-5">
                      <h3 className="text-white text-sm font-medium mb-2">{item.name}</h3>
                      <p className="text-gold font-bold text-lg mb-3">{formatPrice(item.price)}</p>
                      {item.inStock && (
                        <p className="text-green-500 text-xs mb-4 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          In Stock
                        </p>
                      )}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleAddToCart(item)}
                          className="flex-1 border border-gold text-gold hover:bg-gold hover:text-primary-black text-xs font-semibold"
                          variant="outline"
                        >
                          <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                          ADD TO CART
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-10 h-10 p-0 text-gold border border-gray-700"
                          onClick={() => isHydrated && toggleWishlist(item.id)}
                        >
                          <Heart className="h-4 w-4 fill-gold" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* You May Also Like */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-semibold">You May Also Like</h2>
                <Link href="/shop" className="text-gold text-xs flex items-center gap-1 hover:underline">
                  View All <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {youMayAlsoLike.map((item) => (
                  <div key={item.id} className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium truncate">{item.name}</h4>
                      <p className="text-gold font-bold text-sm">{formatPrice(item.price)}</p>
                    </div>
                    <Button variant="ghost" className="p-0 w-8 h-8 text-gold border border-gray-700 rounded-md">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rightmost: Wishlist Summary */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-3">
                  <Heart className="h-8 w-8 text-gold fill-gold" />
                </div>
                <h3 className="text-white font-semibold mb-1">6 Items in Wishlist</h3>
                <p className="text-gray-500 text-xs">Move items to cart and complete your purchase.</p>
              </div>
              <Button className="w-full bg-gold hover:bg-gold/90 text-primary-black text-xs font-bold mb-3">
                <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                ADD ALL TO CART
              </Button>
              <Button variant="ghost" className="w-full border border-gray-700 text-gray-400 text-xs font-semibold">
                <Trash2 className="h-3.5 w-3.5 mr-1" />
                CLEAR WISHLIST
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
