'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, ShoppingCart, Users, Wrench, TrendingUp, TrendingDown, Package, MessageSquare, DollarSign, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';
import Image from 'next/image';

const formatPrice = (price: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price).replace('NGN', '₦');

const Dashboard = () => {
  const { orders, repairs, customers, products } = useStore();
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const totalRepairs = repairs.length;
  const totalCustomers = customers.length;
  const lowStockCount = products.filter(p => p.stock < 10).length;
  const outOfStockCount = products.filter(p => p.stock === 0).length;

  // Calculate top selling products
  const productSales = new Map<string, { name: string; count: number; image: string; revenue: number }>();
  orders.forEach(order => {
    order.items.forEach(item => {
      const existing = productSales.get(item.productId);
      if (existing) {
        existing.count += item.quantity;
        existing.revenue += item.price * item.quantity;
      } else {
        productSales.set(item.productId, {
          name: item.productName,
          count: item.quantity,
          image: item.productImage,
          revenue: item.price * item.quantity
        });
      }
    });
  });
  const topProducts = Array.from(productSales.values()).sort((a, b) => b.revenue - a.revenue).slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-white border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">TOTAL SALES</p>
                <p className="text-xl font-bold text-primary-black">{formatPrice(totalRevenue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">TOTAL ORDERS</p>
                <p className="text-xl font-bold text-primary-black">{totalOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">TOTAL CUSTOMERS</p>
                <p className="text-xl font-bold text-primary-black">{totalCustomers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">REPAIR REQUESTS</p>
                <p className="text-xl font-bold text-primary-black">{totalRepairs}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">TOTAL REVENUE</p>
                <p className="text-xl font-bold text-primary-black">{formatPrice(totalRevenue)}</p>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />+12%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-white border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary-black text-sm font-semibold">Sales Overview</CardTitle>
              <Button variant="ghost" className="text-gold text-xs">This Month</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <p className="mb-2">📊 Sales Chart Placeholder</p>
                <p className="text-xs">Integrate Chart.js/Recharts here</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary-black text-sm font-semibold">Top Selling Products</CardTitle>
              <Button variant="ghost" className="text-gold text-xs">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {topProducts.map((product, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded overflow-hidden bg-gray-100">
                    <Image src={product.image} alt={product.name} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-primary-black text-xs font-medium">{product.name}</p>
                    <p className="text-gray-500 text-xs">{product.count} sales</p>
                  </div>
                </div>
                <p className="text-gold text-xs font-medium">{formatPrice(product.revenue)}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary-black text-sm font-semibold">Recent Orders</CardTitle>
              <Button variant="ghost" className="text-gold text-xs">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {orders.slice(0, 4).map((order, i) => {
              const customer = customers.find(c => c.id === order.userId);
              return (
                <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div>
                    <p className="text-primary-black text-xs font-medium">{order.id} - {customer?.name || 'Unknown'}</p>
                    <p className="text-gray-500 text-xs">{formatPrice(order.total)}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-600' :
                    order.status === 'processing' ? 'bg-yellow-100 text-yellow-600' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>{order.status}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-gold" />
                  <p className="text-gold text-sm font-medium">Low Stock Items</p>
                </div>
                <p className="text-primary-black text-2xl font-bold">{lowStockCount}</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <p className="text-red-500 text-sm font-medium">Out of Stock</p>
                </div>
                <p className="text-primary-black text-2xl font-bold">{outOfStockCount}</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white border-gray-200">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-primary-black text-sm font-medium">New Messages</p>
                  <p className="text-gray-500 text-xs">8 unread messages</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-primary-black text-sm font-medium">Pending Payments</p>
                  <p className="text-gray-500 text-xs">15 pending payments</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-primary-black text-sm font-medium">New Staff</p>
                  <p className="text-gray-500 text-xs">2 new staff members</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
