'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  User,
  ShoppingBag,
  Wrench,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  Phone,
  Mail,
  Map,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';

// Format price as ₦
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price).replace('NGN', '₦');
};

// Format date
const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

// Status badge color
const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return 'bg-green-900 text-green-400';
    case 'repairing':
      return 'bg-yellow-900 text-yellow-400';
    case 'diagnosing':
      return 'bg-blue-900 text-blue-400';
    default:
      return 'bg-gray-800 text-gray-400';
  }
};

export default function ProfilePage() {
  const { user, orders, repairs, cart, wishlist } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Calculate total spent
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-5 mb-6">
              <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
                <User className="h-4 w-4" />
                MY ACCOUNT
              </h3>
              <nav className="space-y-1">
                <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gold text-primary-black">
                  <User className="h-4 w-4" />
                  Profile Overview
                </Link>
                <Link href="/profile/orders" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white">
                  <ShoppingBag className="h-4.5 w-4.5" />
                  Orders
                </Link>
                <Link href="/profile/repairs" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white">
                  <Wrench className="h-4.5 w-4.5" />
                  Repair Requests
                </Link>
                <Link href="/wishlist" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white">
                  <Heart className="h-4.5 w-4.5" />
                  Saved Items
                </Link>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white w-full text-left">
                  <MapPin className="h-4.5 w-4.5" />
                  Addresses
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white w-full text-left">
                  <CreditCard className="h-4.5 w-4.5" />
                  Payment Methods
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white w-full text-left">
                  <Bell className="h-4.5 w-4.5" />
                  Notifications
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white w-full text-left">
                  <Settings className="h-4.5 w-4.5" />
                  Account Settings
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white w-full text-left mt-2">
                  <LogOut className="h-4.5 w-4.5" />
                  Logout
                </button>
              </nav>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-5 mb-6">
              <h3 className="text-white font-bold mb-3 text-sm">NEED A REPAIR?</h3>
              <p className="text-gray-400 text-xs mb-4">Book a professional repair service for your device.</p>
              <Link href="/repair">
                <Button className="w-full bg-gold hover:bg-gold/90 text-primary-black text-xs font-bold">
                  BOOK REPAIR →
                </Button>
              </Link>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-5">
              <h3 className="text-white font-bold mb-3 text-sm">CUSTOMER SUPPORT</h3>
              <p className="text-gray-400 text-xs mb-3">We're here to help you</p>
              <div className="flex flex-col gap-2 text-xs">
                <a href="tel:+2348101234567" className="flex items-center gap-2 text-gray-400 hover:text-gold">
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  <span>+234 810 123 4567</span>
                </a>
                <a href="mailto:support@darahgadz.com" className="flex items-center gap-2 text-gray-400 hover:text-gold">
                  <Mail className="h-3.5 w-3.5 text-gold" />
                  <span>support@darahgadz.com</span>
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs">
                <Button variant="outline" className="w-full border border-gold text-gold text-xs font-medium">
                  CHAT ON WHATSAPP
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Main Content */}
          <div className="flex-1 space-y-8">
            {/* Breadcrumb */}
            <div className="text-gray-400 text-xs mb-2">
              Home <span className="mx-2">/</span> My Account <span className="mx-2">/</span> <span className="text-white">Profile</span>
            </div>

            {/* Profile Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Profile Info */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-800 mb-4 relative overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                        alt="Profile"
                        fill
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute bottom-0 right-0 w-6 h-6 bg-gold text-primary-black rounded-full flex items-center justify-center">
                        <User className="h-3 w-3" />
                      </button>
                    </div>
                    <h2 className="text-white font-semibold text-lg">{user.name}</h2>
                    <p className="text-gray-400 text-sm mt-1">{user.email}</p>
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-1 mt-1">
                      <Phone className="h-3 w-3 text-gold" />
                      {user.phone}
                    </p>
                    <p className="text-gray-500 text-xs mt-2">Member since {formatDate(user.memberSince)}</p>

                    <Button className="mt-5 border border-gold text-gold hover:bg-gold/10 text-xs font-semibold">
                      EDIT PROFILE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <ShoppingBag className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-white font-bold text-xl">{orders.length}</span>
                    <span className="text-gray-400 text-xs mt-1">Orders</span>
                    <Link href="/profile/orders" className="text-gold text-xs mt-2 hover:underline">View all</Link>
                  </div>

                  <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <Wrench className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-white font-bold text-xl">{repairs.length}</span>
                    <span className="text-gray-400 text-xs mt-1">Repair Requests</span>
                    <Link href="/profile/repairs" className="text-gold text-xs mt-2 hover:underline">View all</Link>
                  </div>

                  <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <Heart className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-white font-bold text-xl">{wishlist.length}</span>
                    <span className="text-gray-400 text-xs mt-1">Saved Items</span>
                    <Link href="/wishlist" className="text-gold text-xs mt-2 hover:underline">View all</Link>
                  </div>

                  <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <CreditCard className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-gold font-bold text-xl">{formatPrice(totalSpent)}</span>
                    <span className="text-gray-400 text-xs mt-1">Total Spent</span>
                    <button className="text-gold text-xs mt-2 hover:underline">View details</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders & Repairs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-white font-semibold">Recent Orders</h3>
                  <Link href="/profile/orders" className="text-gold text-xs flex items-center gap-1 hover:underline">
                    View All Orders <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center gap-4 border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
                          src={order.items[0].productImage}
                          alt={order.items[0].productName}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-white text-sm font-medium truncate">{order.items[0].productName}</p>
                          <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs">Order ID: {order.id}</p>
                        <p className="text-gray-400 text-xs">{formatDate(order.createdAt)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repair Requests */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-white font-semibold">Repair Requests</h3>
                  <Link href="/profile/repairs" className="text-gold text-xs flex items-center gap-1 hover:underline">
                    View All Repairs <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {repairs.slice(0, 3).map((repair) => (
                    <div key={repair.id} className="flex items-center gap-4 border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
                          src={repair.deviceImage}
                          alt={repair.deviceType}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-white text-sm font-medium truncate">{repair.deviceType} - {repair.repairCategory}</p>
                          <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(repair.status)}`}>
                            {repair.status}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs">Ticket: {repair.ticketNumber}</p>
                        <p className="text-gray-400 text-xs">{formatDate(repair.createdAt)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800">
                  <Link href="/repair">
                    <Button className="w-full bg-gold hover:bg-gold/90 text-primary-black text-xs font-bold">
                      BOOK A NEW REPAIR →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Saved Items Preview */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-semibold">Saved Items</h3>
                <Link href="/wishlist" className="text-gold text-xs flex items-center gap-1 hover:underline">
                  View All Saved Items <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {wishlist.slice(0, 6).map((productId) => {
                  const product = useStore.getState().products.find(p => p.id === productId);
                  if (!product) return null;
                  return (
                    <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden group">
                      <div className="relative aspect-square">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="w-full h-full object-cover"
                        />
                        <Heart className="absolute top-2 right-2 w-4 h-4 text-gold fill-gold" />
                      </div>
                      <div className="p-3">
                        <p className="text-white text-xs truncate">{product.name}</p>
                        <p className="text-gold font-semibold text-sm mt-1">{formatPrice(product.price)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
