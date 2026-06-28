import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CustomersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
        <p className="text-gray-500">Manage your customer database</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search customers..." className="pl-10" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Phone</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Orders</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Joined</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Chidera Okoro', email: 'chidera@example.com', phone: '+234 812 345 6789', orders: 12, joined: 'Jan 2024' },
                  { name: 'Aisha Musa', email: 'aisha@example.com', phone: '+234 812 345 6780', orders: 8, joined: 'Feb 2024' },
                  { name: 'Ibrahim Suleiman', email: 'ibrahim@example.com', phone: '+234 812 345 6781', orders: 15, joined: 'Mar 2024' },
                ].map((customer, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{customer.name}</td>
                    <td className="px-6 py-4 text-gray-600">{customer.email}</td>
                    <td className="px-6 py-4 text-gray-600">{customer.phone}</td>
                    <td className="px-6 py-4 text-gray-600">{customer.orders}</td>
                    <td className="px-6 py-4 text-gray-600">{customer.joined}</td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="icon" className="text-gray-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomersPage;
