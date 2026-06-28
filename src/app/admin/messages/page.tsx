import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const MessagesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
        <p className="text-gray-500">View and respond to customer inquiries</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { type: 'Unread', count: 8, icon: MessageSquare, color: 'bg-red-100 text-red-700' },
          { type: 'Today', count: 12, icon: Mail, color: 'bg-blue-100 text-blue-700' },
          { type: 'All', count: 128, icon: Phone, color: 'bg-gray-100 text-gray-700' },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
              <p className="text-gray-500 text-sm">{stat.type} Messages</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { from: 'Chidera Okoro', subject: 'iPhone 15 Pro Max Inquiry', time: '2 hours ago' },
            { from: 'Aisha Musa', subject: 'Repair Status Update', time: '5 hours ago' },
            { from: 'Ibrahim Suleiman', subject: 'Order #ORD-002 Question', time: '1 day ago' },
          ].map((msg, i) => (
            <div key={i} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex justify-between items-start mb-1">
                <p className="font-medium text-gray-900">{msg.from}</p>
                <p className="text-gray-500 text-xs">{msg.time}</p>
              </div>
              <p className="text-gray-600 text-sm">{msg.subject}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagesPage;
