import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, Calendar } from 'lucide-react';

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reports</h2>
          <p className="text-gray-500">View sales and repair statistics</p>
        </div>
        <Button className="bg-gold hover:bg-gold-dark text-black">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Daily Sales', amount: '₦250,000', icon: BarChart3 },
          { title: 'Weekly Sales', amount: '₦1,750,000', icon: BarChart3 },
          { title: 'Monthly Sales', amount: '₦8,250,000', icon: BarChart3 },
          { title: 'Yearly Sales', amount: '₦45,000,000', icon: BarChart3 },
        ].map((report, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <report.icon className="h-8 w-8 text-gold mb-2" />
              <p className="text-gray-500 text-sm">{report.title}</p>
              <p className="text-2xl font-bold text-gray-900">{report.amount}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <BarChart3 className="h-12 w-12 mx-auto mb-2" />
            <p>📊 Chart Placeholder</p>
            <p className="text-sm">Integrate your chart library here</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Repair Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Repairs', value: '128' },
              { label: 'Completed', value: '100' },
              { label: 'In Progress', value: '20' },
              { label: 'Pending', value: '8' },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;
