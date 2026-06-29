'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  User as UserIcon,
  ShoppingCart,
  Wrench,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  MessageCircle,
  Phone,
  Edit3,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarLinks = [
  { name: 'Profile Overview', href: '/profile', icon: UserIcon, active: true },
  { name: 'Orders', href: '/profile/orders', icon: ShoppingCart },
  { name: 'Repair Requests', href: '/profile/repairs', icon: Wrench },
  { name: 'Saved Items', href: '/profile/saved', icon: Heart },
  { name: 'Addresses', href: '/profile/addresses', icon: MapPin },
  { name: 'Payment Methods', href: '/profile/payments', icon: CreditCard },
  { name: 'Notifications', href: '/profile/notifications', icon: Bell },
  { name: 'Account Settings', href: '/profile/settings', icon: Settings },
];

const recentOrders = [
  {
    id: 'ORD-00056',
    name: 'iPhone 15 Pro Max 256GB',
    price: '₦1,650,000',
    status: 'Delivered',
    date: 'May 28, 2024',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200',
  },
  {
    id: 'ORD-00055',
    name: 'MacBook Air M2 256GB SSD',
    price: '₦1,450,000',
    status: 'Delivered',
    date: 'May 20, 2024',
    image: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=200',
  },
  {
    id: 'ORD-00054',
    name: 'AirPods Pro 2nd Gen',
    price: '₦350,000',
    status: 'Delivered',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200',
  },
  {
    id: 'ORD-00053',
    name: 'Apple Watch Series 9',
    price: '₦550,000',
    status: 'Delivered',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200',
  },
];

const repairRequests = [
  {
    id: 'REP-00034',
    name: 'iPhone 13 Pro - Screen Replacement',
    status: 'Completed',
    date: 'May 25, 2024',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200',
  },
  {
    id: 'REP-00033',
    name: 'Samsung S23 Ultra - Battery Issue',
    status: 'Repairing',
    date: 'May 18, 2024',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200',
  },
  {
    id: 'REP-00032',
    name: 'MacBook Pro - Overheating',
    status: 'Diagnosing',
    date: 'May 12, 2024',
    image: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=200',
  },
];

const savedItems = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    price: '₦1,650,000',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: '₦1,320,000',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300',
  },
  {
    id: '3',
    name: 'MacBook Air M2',
    price: '₦1,450,000',
    image: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=300',
  },
  {
    id: '4',
    name: 'Apple Watch Series 9',
    price: '₦550,000',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300',
  },
  {
    id: '5',
    name: 'AirPods Pro 2nd Gen',
    price: '₦350,000',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300',
  },
  {
    id: '6',
    name: 'iPad Air 8th Gen',
    price: '₦800,000',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300',
  },
];

export default function UserProfilePage() {
  return (
    <div className="min-h-screen bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
            {/* My Account */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                MY ACCOUNT
              </h3>
              <nav className="space-y-1">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      link.active
                        ? 'bg-gold text-primary-black'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <link.icon className="h-4.5 w-4.5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
                <Button variant="ghost" className="flex items-center gap-3 px-3 py-2.5 w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white text-sm font-medium">
                  <LogOut className="h-4.5 w-4.5" />
                  <span>Logout</span>
                </Button>
              </nav>
            </div>

            {/* Need a Repair */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
              <h3 className="text-gold font-bold mb-2">NEED A REPAIR?</h3>
              <p className="text-gray-400 text-xs mb-4">Book a professional repair service for your device.</p>
              <Button className="w-full bg-gold hover:bg-gold/90 text-primary-black font-bold">
                BOOK REPAIR →
              </Button>
            </div>

            {/* Customer Support */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
              <h3 className="text-white font-semibold mb-3">CUSTOMER SUPPORT</h3>
              <p className="text-gray-400 text-xs mb-3">We are here to help you</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300 text-xs">
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  <span>+234 810 123 4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-xs">
                  <MessageCircle className="h-3.5 w-3.5 text-gold" />
                  <span>support@darahgadgetstore.com</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-gold text-gold hover:bg-gold/10 text-xs font-medium">
                CHAT ON WHATSAPP
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Breadcrumb */}
            <div className="text-gray-400 text-xs mb-4">
              Home <span className="mx-2">/</span> My Account <span className="mx-2">/</span> <span className="text-white">Profile</span>
            </div>

            {/* Top Row: Profile + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Profile Overview */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <h2 className="text-white text-xl font-semibold mb-6">Profile Overview</h2>
                <div className="flex items-start gap-5">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                        alt="Profile"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-7 h-7 bg-gold rounded-full flex items-center justify-center">
                      <Edit3 className="h-3.5 w-3.5 text-primary-black" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">Chinedu Okafor</h3>
                    <p className="text-gray-400 text-sm mb-2">chinedu.okafor@gmail.com</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <Phone className="h-3.5 w-3.5 text-gold" />
                      <span>+234 810 123 4567</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Member since May 12, 2024</span>
                    </div>
                    <Button className="mt-4 bg-gold hover:bg-gold/90 text-primary-black text-xs font-medium">
                      EDIT PROFILE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <ShoppingCart className="h-5 w-5 text-gold" />
                    </div>
                    <div className="text-white font-bold text-2xl">12</div>
                    <div className="text-gray-400 text-xs mt-1">Orders</div>
                    <div className="text-gold text-xs mt-2 cursor-pointer hover:underline">View all</div>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <Wrench className="h-5 w-5 text-gold" />
                    </div>
                    <div className="text-white font-bold text-2xl">3</div>
                    <div className="text-gray-400 text-xs mt-1">Repair Requests</div>
                    <div className="text-gold text-xs mt-2 cursor-pointer hover:underline">View all</div>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <Heart className="h-5 w-5 text-gold" />
                    </div>
                    <div className="text-white font-bold text-2xl">8</div>
                    <div className="text-gray-400 text-xs mt-1">Saved Items</div>
                    <div className="text-gold text-xs mt-2 cursor-pointer hover:underline">View all</div>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                      <CreditCard className="h-5 w-5 text-gold" />
                    </div>
                    <div className="text-white font-bold text-2xl">₦680,000</div>
                    <div className="text-gray-400 text-xs mt-1">Total Spent</div>
                    <div className="text-gold text-xs mt-2 cursor-pointer hover:underline">View details</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders & Repair Requests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-white font-semibold">Recent Orders</h2>
                  <Link href="/profile/orders" className="text-gold text-xs flex items-center gap-1 hover:underline">
                    View All Orders <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-12 h-12 flex-shrink-0 bg-gray-700 rounded overflow-hidden">
                        <Image
                          src={order.image}
                          alt={order.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{order.name}</p>
                        <p className="text-gray-500 text-xs">Order ID: {order.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gold text-sm font-medium">{order.price}</p>
                        <p className="text-green-500 text-xs">{order.status}</p>
                        <p className="text-gray-500 text-xs">{order.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repair Requests */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-white font-semibold">Repair Requests</h2>
                  <Link href="/profile/repairs" className="text-gold text-xs flex items-center gap-1 hover:underline">
                    View All Repairs <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {repairRequests.map((repair) => (
                    <div key={repair.id} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-12 h-12 flex-shrink-0 bg-gray-700 rounded overflow-hidden">
                        <Image
                          src={repair.image}
                          alt={repair.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{repair.name}</p>
                        <p className="text-gray-500 text-xs">ID: #{repair.id}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs px-2 py-1 rounded ${repair.status === 'Completed' ? 'bg-green-500/20 text-green-500' : repair.status === 'Repairing' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-blue-500/20 text-blue-500'}`}>
                          {repair.status}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">{repair.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gold hover:bg-gold/90 text-primary-black font-medium">
                  BOOK A NEW REPAIR →
                </Button>
              </div>
            </div>

            {/* Saved Items */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-white font-semibold">Saved Items</h2>
                <Link href="/profile/saved" className="text-gold text-xs flex items-center gap-1 hover:underline">
                  View All Saved Items <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="bg-gray-800/50 rounded-lg p-3 group">
                    <div className="aspect-square bg-gray-700 rounded-md mb-3 overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <button className="absolute top-2 right-2 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center text-gold">
                        <Heart className="h-3.5 w-3.5 fill-gold" />
                      </button>
                    </div>
                    <h4 className="text-white text-xs font-medium truncate mb-1">{item.name}</h4>
                    <p className="text-gold text-sm font-bold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
