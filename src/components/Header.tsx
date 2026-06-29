'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Search, Heart, User, Phone, MapPin, MessageCircle, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const pathname = usePathname();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Navigation links configuration
  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'SHOP', href: '/shop' },
    { label: 'PHONE REPAIR', href: '/repair' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  // Handle button clicks
  const handleSearchClick = () => setIsSearchOpen(!isSearchOpen);
  const handleUserClick = () => alert('User profile section coming soon!');
  const handleCartClick = () => alert(`Shopping cart has ${cartCount} items!`);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-gold text-primary-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span>Visit us at Shop 13, Omamma Plaza, Eke Awka</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs md:text-sm">
              <Phone className="h-3.5 w-3.5" />
              <a href="tel:+2348123456789" className="hover:text-white transition-colors">Need help? +234 812 345 6789</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer" className="text-primary-black hover:text-white transition-colors">
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
              <Twitter className="h-3.5 w-3.5 text-primary-black hover:text-white transition-colors" />
              <Instagram className="h-3.5 w-3.5 text-primary-black hover:text-white transition-colors" />
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

            {/* Search bar - visible when opened */}
            {isSearchOpen && (
              <div className="absolute left-0 right-0 top-16 md:static md:top-auto bg-background-dark md:bg-transparent p-4 md:p-0 md:ml-8 flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none"
                />
              </div>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-sm pb-1 transition-colors border-b-2 ${
                    pathname === link.href
                      ? 'text-gold border-gold'
                      : 'text-gray-400 border-transparent hover:text-gold hover:border-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-gold h-9 w-9"
                onClick={handleSearchClick}
              >
                <Search className="h-4.5 w-4.5" />
              </Button>
              <Link href="/profile">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-gold h-9 w-9"
                >
                  <User className="h-4.5 w-4.5" />
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-gold h-9 w-9 relative"
                onClick={() => isHydrated && toggleWishlist('demo')}
                title="Wishlist"
              >
                <Heart className={`h-4.5 w-4.5 ${isHydrated && wishlist.includes('demo') ? 'fill-gold text-gold' : ''}`} />
                {isHydrated && wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Button>
              <Link href="/cart">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-gold h-9 w-9 relative"
                  title="Shopping Cart"
                >
                  <ShoppingCart className="h-4.5 w-4.5" />
                  {isHydrated && cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gold text-primary-black text-xs font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
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
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 font-medium transition-colors ${
                      pathname === link.href ? 'text-gold font-semibold' : 'text-gray-400 hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
