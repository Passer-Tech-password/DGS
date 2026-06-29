'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Wrench,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  User,
  ChevronDown,
  MessageSquare,
  LogOut,
  Image
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const sidebarLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: ShoppingBag },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Repairs', href: '/admin/repairs', icon: Wrench },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Staff', href: '/admin/staff', icon: Users },
  { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { name: 'Images', href: '/admin/images', icon: Image },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background-dark text-white">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-56 bg-gradient-to-b from-background-dark to-gray-900 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 border-r border-gray-800`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-800 bg-white">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-primary-black font-bold text-lg">DG</span>
            </div>
            <div>
              <span className="text-lg font-bold text-gold">DARAH</span>
              <span className="text-xs text-gray-400 block -mt-1">ADMIN</span>
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600 hover:text-primary-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-4 px-2">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors mb-1 ${
                  isActive
                    ? 'bg-gold text-primary-black'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <link.icon className="h-4.5 w-4.5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-gray-400 hover:bg-gray-800 hover:text-white mt-4"
          >
            <LogOut className="h-4.5 w-4.5" />
            <span>Logout</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top nav */}
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="text-primary-black">
              <span className="font-semibold">Dashboard Overview</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-gray-600 text-sm">May 1 - May 31, 2024</div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-primary-black">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Super Admin</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
