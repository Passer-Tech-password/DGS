import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Eye, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';

const RepairsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Repair Requests</h2>
          <p className="text-gray-500">Manage all device repair requests</p>
        </div>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search repairs..." className="pl-10" />
            </div>
            <Button variant="ghost" className="border border-gray-200">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Repairs Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Ticket ID</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Customer</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Device</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Issue</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Technician</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { id: 'REP-001', customer: 'Emeka Okafor', device: 'iPhone 12 Pro', issue: 'Screen Replacement', status: 'Repairing', technician: 'John Doe' },
                  { id: 'REP-002', customer: 'Zainab Lawal', device: 'Samsung S21', issue: 'Battery Replacement', status: 'Diagnosing', technician: 'Unassigned' },
                  { id: 'REP-003', customer: 'Victor Eze', device: 'MacBook Air', issue: 'Keyboard Repair', status: 'Completed', technician: 'Jane Smith' },
                  { id: 'REP-004', customer: 'Amina Mohammed', device: 'iPad Pro', issue: 'Charging Port', status: 'Delivered', technician: 'John Doe' },
                ].map((repair, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{repair.id}</td>
                    <td className="px-6 py-4 text-gray-600">{repair.customer}</td>
                    <td className="px-6 py-4 text-gray-600">{repair.device}</td>
                    <td className="px-6 py-4 text-gray-600">{repair.issue}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        repair.status === 'Completed' || repair.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                        repair.status === 'Diagnosing' ? 'bg-yellow-100 text-yellow-700' :
                        repair.status === 'Repairing' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {repair.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{repair.technician}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-600">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-600">
                          <Edit className="h-4 w-4" />
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

export default RepairsPage;
