'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Search, Heart, User, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-gold text-primary-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2" suppressHydrationWarning={true}>
          <div className="flex items-center gap-2 text-xs md:text-sm" suppressHydrationWarning={true}>
            <MapPin className="h-3.5 w-3.5" />
            <span>Visit us at Shop 13, Omamma Plaza, Eke Awka</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs md:text-sm" suppressHydrationWarning={true}>
              <Phone className="h-3.5 w-3.5" />
              <span>Need help? +234 812 345 6789</span>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="h-3.5 w-3.5" />
              <Twitter className="h-3.5 w-3.5" />
              <Instagram className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="bg-background-dark border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gold/10 rounded-lg border border-gold/30">
                  <span className="text-2xl md:text-3xl font-bold text-gold tracking-tight">DG</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white tracking-wide">DARAH</span>
                <span className="text-[10px] md:text-xs font-medium tracking-widest text-gray-400 uppercase">GADGET STORE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gold font-semibold text-sm border-b-2 border-gold pb-1">
                HOME
              </Link>
              <Link href="/shop" className="text-gray-400 hover:text-gold transition-colors font-medium text-sm hover:border-b-2 hover:border-gold pb-1">
                SHOP
              </Link>
              <Link href="/repair" className="text-gray-400 hover:text-gold transition-colors font-medium text-sm hover:border-b-2 hover:border-gold pb-1">
                PHONE REPAIR
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-gold transition-colors font-medium text-sm hover:border-b-2 hover:border-gold pb-1">
                ABOUT US
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors font-medium text-sm hover:border-b-2 hover:border-gold pb-1">
                BLOG
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors font-medium text-sm hover:border-b-2 hover:border-gold pb-1">
                CONTACT US
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gold h-9 w-9">
                <Search className="h-4.5 w-4.5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gold h-9 w-9">
                <User className="h-4.5 w-4.5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gold h-9 w-9">
                <Heart className="h-4.5 w-4.5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gold h-9 w-9 relative">
                <ShoppingCart className="h-4.5 w-4.5" />
                {isHydrated && cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-primary-black text-xs font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-400 hover:text-gold"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-800 py-6 bg-background-dark">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-gold py-2 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/shop"
                  className="text-gray-400 hover:text-gold py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SHOP
                </Link>
                <Link
                  href="/repair"
                  className="text-gray-400 hover:text-gold py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PHONE REPAIR
                </Link>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-gold py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT US
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-gold py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT US
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
