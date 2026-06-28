import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-dark text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-bold text-xl tracking-tight">DG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">DARAH</span>
                <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">GADGET STORE</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your one-stop shop for premium gadgets and professional repair services.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-black transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-black transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-black transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-black transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-sm hover:text-gold transition-colors">Shop</Link></li>
              <li><Link href="/repair" className="text-sm hover:text-gold transition-colors">Phone Repair</Link></li>
              <li><Link href="/about" className="text-sm hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gold transition-colors">Smartphone Sales</a></li>
              <li><a href="#" className="text-sm hover:text-gold transition-colors">Laptop Sales</a></li>
              <li><a href="#" className="text-sm hover:text-gold transition-colors">Gadget Accessories</a></li>
              <li><a href="#" className="text-sm hover:text-gold transition-colors">Phone Repairs</a></li>
              <li><a href="#" className="text-sm hover:text-gold transition-colors">Device Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-sm">Shop 13, Omamma Plaza, Eke Awka, Anambra State</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm">+234 812 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm">info@darahgadgets.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">© 2024 DARAH Gadget Store. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-xs hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
