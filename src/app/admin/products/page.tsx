import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ProductsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>
          <p className="text-gray-500">Manage your product inventory</p>
        </div>
        <Button className="bg-gold hover:bg-gold-dark text-black">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Button variant="ghost" className="border border-gray-200">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Stock</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'iPhone 15 Pro Max', category: 'Smartphones', price: '₦1,650,000', stock: 12, status: 'In Stock' },
                  { name: 'Samsung Galaxy S24 Ultra', category: 'Smartphones', price: '₦1,320,000', stock: 8, status: 'In Stock' },
                  { name: 'MacBook Air M2', category: 'Laptops', price: '₦1,450,000', stock: 5, status: 'Low Stock' },
                  { name: 'Apple Watch Series 9', category: 'Smart Watches', price: '₦650,000', stock: 0, status: 'Out of Stock' },
                ].map((product, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=40&h=40&fit=crop`} 
                          alt={product.name}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span className="font-medium text-gray-900">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                    <td className="px-6 py-4 text-gray-600 font-medium">{product.price}</td>
                    <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        product.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                        product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-600">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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

export default ProductsPage;
