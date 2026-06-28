'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Wrench, ChevronRight, Phone, Shield, Truck, CreditCard, Award, Users, Clock, Lock, Smartphone, Laptop, Watch, Tablet, Headphones, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useStore } from '@/store';

// Sample products data
const featuredProducts = [
  { id: '1', name: 'iPhone 15 Pro Max', specs: '256GB', price: '₦1,650,000', priceNumber: 1650000, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400' },
  { id: '2', name: 'Samsung Galaxy S24 Ultra', specs: '512GB', price: '₦1,320,000', priceNumber: 1320000, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400' },
  { id: '3', name: 'MacBook Air M2', specs: '256GB SSD', price: '₦1,450,000', priceNumber: 1450000, image: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400' },
  { id: '4', name: 'Apple Watch Series 9', specs: 'GPS', price: '₦650,000', priceNumber: 650000, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400' },
  { id: '5', name: 'AirPods Pro 2nd Gen', specs: 'USB-C', price: '₦330,000', priceNumber: 330000, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400' },
  { id: '6', name: 'iPad Air 5th Gen', specs: '64GB', price: '₦660,000', priceNumber: 660000, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400' },
];

interface FeaturedProduct {
  id: string;
  name: string;
  specs: string;
  price: string;
  priceNumber: number;
  image: string;
}

const categories = [
  { name: 'Smartphones', icon: Smartphone, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' },
  { name: 'Laptops', icon: Laptop, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400' },
  { name: 'Accessories', icon: Headphones, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
  { name: 'Smart Watches', icon: Watch, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
  { name: 'Tablets', icon: Tablet, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400' },
  { name: 'Phone Repair', icon: Wrench, image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400' },
];

export default function HomePage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const addToCart = useStore((state) => state.addToCart);
  const wishlist = useStore((state) => state.wishlist);
  const toggleWishlist = useStore((state) => state.toggleWishlist);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleAddToCart = (product: FeaturedProduct) => {
    addToCart({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      price: product.priceNumber,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12">
        {/* Background gradient and effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] opacity-15"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold rounded-full blur-[80px] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-gold font-semibold mb-1 tracking-widest uppercase text-sm">Welcome to</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-1 text-white">DARAH</h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gold">GADGET STORE</h2>
              <p className="text-gray-300 mb-1 text-lg">Premium gadgets. Professional service.</p>
              <p className="text-gray-400 mb-8 text-lg">Unbeatable prices.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button className="bg-gold hover:bg-gold/90 text-primary-black font-semibold py-3 px-6 rounded-full text-sm">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    SHOP NOW
                  </Button>
                </Link>
                <Link href="/repair">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 hover:text-gold font-semibold py-3 px-6 rounded-full text-sm">
                    <Wrench className="mr-2 h-4 w-4" />
                    BOOK REPAIR
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="text-gray-400 hover:text-gold border border-gray-800 hover:border-gold font-semibold py-3 px-6 rounded-full text-sm">
                    <Phone className="mr-2 h-4 w-4" />
                    CONTACT US
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800" alt="Premium Gadgets" className="w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-6 bg-white text-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <Shield className="h-5 w-5" />, title: '100% Genuine', desc: 'Products' },
              { icon: <Award className="h-5 w-5" />, title: '1 Year', desc: 'Warranty' },
              { icon: <Truck className="h-5 w-5" />, title: 'Fast & Secure', desc: 'Delivery' },
              { icon: <CreditCard className="h-5 w-5" />, title: 'Secure', desc: 'Payments' },
              { icon: <Award className="h-5 w-5" />, title: 'Excellent', desc: 'Support' },
            ].map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="text-center flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-primary-black mb-2">
                  {feature.icon}
                </div>
                <p className="text-primary-black font-semibold text-sm">{feature.title}</p>
                <p className="text-gray-600 text-xs">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div key={category.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="group">
                <Link href="/shop">
                  <Card className="overflow-hidden border-gray-200 bg-white hover:shadow-md transition-all">
                    <div className="relative h-28 overflow-hidden bg-gray-50">
                      <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <CardContent className="p-3 text-center">
                      <h3 className="font-semibold text-xs mb-1 text-primary-black">{category.name}</h3>
                      <div className="text-gold text-xs hover:underline flex items-center justify-center gap-1">
                        Explore Now <ChevronRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-xl font-bold text-primary-black">
              FEATURED PRODUCTS
            </motion.h2>
            <Link href="/shop">
              <Button variant="ghost" className="text-gold hover:text-gold mt-4 sm:mt-0 font-semibold text-sm flex items-center gap-1">
                View All Products <ChevronRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {featuredProducts.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="group">
                <Card className="overflow-hidden border-gray-200 bg-white hover:shadow-md transition-all">
                  <div className="relative p-4 bg-gray-50">
                    <img src={product.image} alt={product.name} className="w-full h-32 object-contain transition-transform duration-500 group-hover:scale-105" />
                    <button 
                      onClick={() => isHydrated && toggleWishlist(product.id)} 
                      className={`absolute top-3 right-3 rounded-full p-1.5 transition-all border shadow-sm ${isHydrated && wishlist.includes(product.id) ? 'bg-gold text-primary-black border-gold' : 'bg-white text-gray-600 border-gray-200 hover:bg-gold/10'}`}
                    >
                      <Heart className={`h-3.5 w-3.5 ${isHydrated && wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-xs mb-1 text-primary-black">{product.name}</h3>
                    <p className="text-gray-500 text-xs mb-2">{product.specs}</p>
                    <p className="text-lg font-bold text-gold mb-3">{product.price}</p>
                    <Button 
                      onClick={() => handleAddToCart(product)} 
                      className="w-full bg-gold hover:bg-gold/90 text-primary-black font-semibold text-xs py-2"
                    >
                      <ShoppingCart className="mr-2 h-3.5 w-3.5" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Phone Repair CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="overflow-hidden bg-gradient-to-br from-background-dark to-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-6 w-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">PROFESSIONAL PHONE REPAIR</h3>
                      <p className="text-gray-400 mb-4 text-xs">Expert technicians. Fast turnaround.</p>
                      <Link href="/repair">
                        <Button className="bg-gold hover:bg-gold/90 text-primary-black font-semibold text-xs py-2 px-4">
                          BOOK REPAIR <ChevronRight className="ml-2 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Gadget Promotion */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="overflow-hidden bg-gradient-to-r from-gold to-yellow-600 border-gold">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                      <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200" alt="Gadgets" className="w-28 h-20 object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-primary-black">GET THE BEST GADGETS</h3>
                      <p className="text-primary-black/80 mb-4 text-xs">AT THE BEST PRICES</p>
                      <Link href="/shop">
                        <Button className="bg-primary-black hover:bg-gray-900 text-gold font-semibold text-xs py-2 px-4">
                          SHOP NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visit Store CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Card className="overflow-hidden bg-background-dark border-gray-800">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-white">VISIT OUR STORE</h3>
                      <p className="text-gray-400 text-xs mb-1">Shop 13, Omamma Plaza</p>
                      <p className="text-gray-400 text-xs mb-2">Eke Awka, Anambra State</p>
                      <p className="text-gold text-xs font-semibold">Mon-Sat: 8:00AM - 7:00PM</p>
                      <p className="text-gold text-xs font-semibold">Sunday: Closed</p>
                    </div>
                    <div className="h-full">
                      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400" alt="Store" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-6 bg-gradient-to-r from-background-dark to-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Users className="h-5 w-5" />, value: '500+', label: 'Happy Customers' },
              { icon: <Shield className="h-5 w-5" />, value: '100%', label: 'Genuine Products' },
              { icon: <Users className="h-5 w-5" />, value: '2+', label: 'Expert Staff' },
              { icon: <Truck className="h-5 w-5" />, value: 'Fast', label: 'Delivery' },
              { icon: <Clock className="h-5 w-5" />, value: '24/7', label: 'Customer Support' },
              { icon: <Lock className="h-5 w-5" />, value: 'Secure', label: 'Payments' },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 text-gold mx-auto mb-1">
                  {stat.icon}
                </div>
                <p className="text-xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-gray-400 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
