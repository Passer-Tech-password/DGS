'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useStore } from '@/store';

const products = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 850000,
    category: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    rating: 4.8,
    stock: 15,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 720000,
    category: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    rating: 4.7,
    stock: 20,
  },
  {
    id: '3',
    name: 'MacBook Air M2',
    price: 1250000,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400',
    rating: 4.9,
    stock: 8,
  },
  {
    id: '4',
    name: 'Apple Watch Series 9',
    price: 450000,
    category: 'Smart Watches',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
    rating: 4.6,
    stock: 25,
  },
  {
    id: '5',
    name: 'AirPods Pro 2nd Gen',
    price: 180000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400',
    rating: 4.5,
    stock: 50,
  },
  {
    id: '6',
    name: 'iPad Air 5th Gen',
    price: 650000,
    category: 'Tablets',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    rating: 4.7,
    stock: 12,
  },
];

const categories = ['All', 'Smartphones', 'Laptops', 'Accessories', 'Smart Watches', 'Tablets'];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-gray-400 text-lg">Discover our premium collection of gadgets</p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="flex-1 lg:flex-none"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <CardContent className="p-6">
                  <p className="text-gold text-sm font-medium mb-2">{product.category}</p>
                  <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-gold mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gold">₦{product.price.toLocaleString()}</p>
                    <Button
                      onClick={() =>
                        addToCart({
                          productId: product.id,
                          productName: product.name,
                          productImage: product.image,
                          price: product.price,
                          quantity: 1,
                        })
                      }
                      size="icon"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
