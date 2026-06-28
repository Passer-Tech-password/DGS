import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, ShoppingCart, Users, Wrench, TrendingUp, TrendingDown, Package, MessageSquare, DollarSign, ArrowUpRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-white border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">TOTAL SALES</p>
                <p className="text-xl font-bold text-primary-black">₦8,250,000</p>
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
                <p className="text-xl font-bold text-primary-black">156</p>
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
                <p className="text-xl font-bold text-primary-black">245</p>
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
                <p className="text-xl font-bold text-primary-black">28</p>
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
                <p className="text-xl font-bold text-primary-black">₦8,250,000</p>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +12%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Tables Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Sales Overview Chart */}
        <Card className="lg:col-span-2 bg-white border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary-black text-sm font-semibold">Sales Overview</CardTitle>
              <Button variant="ghost" className="text-gold text-xs">
                This Month
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Placeholder for chart */}
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <p className="mb-2">📊 Sales Chart Placeholder</p>
                <p className="text-xs">Integrate Chart.js/Recharts here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Selling Products */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary-black text-sm font-semibold">Top Selling Products</CardTitle>
              <Button variant="ghost" className="text-gold text-xs">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: 'iPhone 15 Pro Max', sales: '85', revenue: '₦3,825,000' },
              { name: 'Samsung Galaxy S24 Ultra', sales: '62', revenue: '₦2,294,000' },
              { name: 'MacBook Air M2', sales: '41', revenue: '₦1,090,000' },
              { name: 'Apple Watch Series 9', sales: '35', revenue: '₦700,000' },
            ].map((product, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img 
                    src={`https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=40&h=40&fit=crop`} 
                    alt={product.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div>
                    <p className="text-primary-black text-xs font-medium">{product.name}</p>
                    <p className="text-gray-500 text-xs">{product.sales} sales</p>
                  </div>
                </div>
                <p className="text-gold text-xs font-medium">{product.revenue}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders & Notifications */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary-black text-sm font-semibold">Recent Orders</CardTitle>
              <Button variant="ghost" className="text-gold text-xs">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { id: 'ORD-001', customer: 'Chidera Okoro', amount: '₦650,000', status: 'Delivered' },
              { id: 'ORD-002', customer: 'Aisha Musa', amount: '₦1,320,000', status: 'Processing' },
              { id: 'ORD-003', customer: 'Ibrahim Suleiman', amount: '₦330,000', status: 'Shipped' },
              { id: 'ORD-004', customer: 'Fatima Abdullahi', amount: '₦1,650,000', status: 'Pending' },
            ].map((order, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <p className="text-primary-black text-xs font-medium">{order.id} - {order.customer}</p>
                  <p className="text-gray-500 text-xs">{order.amount}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === 'Delivered' ? 'bg-green-100 text-green-600' :
                  order.status === 'Processing' ? 'bg-yellow-100 text-yellow-600' :
                  order.status === 'Shipped' ? 'bg-blue-100 text-blue-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications & Alerts */}
        <div className="space-y-4">
          {/* Stock Alerts */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-gold" />
                  <p className="text-gold text-sm font-medium">Low Stock Items</p>
                </div>
                <p className="text-primary-black text-2xl font-bold">12</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <p className="text-red-500 text-sm font-medium">Out of Stock</p>
                </div>
                <p className="text-primary-black text-2xl font-bold">5</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Alerts */}
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
