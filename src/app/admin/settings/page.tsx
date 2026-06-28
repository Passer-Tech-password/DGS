import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SettingsPage = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-500">Manage your store settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Store Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="storeName">Store Name</Label>
            <Input id="storeName" defaultValue="DARAH Gadget Store" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="storeAddress">Address</Label>
            <Input id="storeAddress" defaultValue="Shop 13, Omamma Plaza, Eke Awka, Anambra State" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="storePhone">Phone Number</Label>
            <Input id="storePhone" defaultValue="+234 812 345 6789" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="storeEmail">Email</Label>
            <Input id="storeEmail" defaultValue="info@darahgadgetstore.com" />
          </div>
          <Button className="bg-gold hover:bg-gold-dark text-black">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="paystackKey">Paystack API Key</Label>
            <Input id="paystackKey" placeholder="pk_test_..." />
          </div>
          <Button className="bg-gold hover:bg-gold-dark text-black">
            Save Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-gray-500 text-sm">Receive email for new orders</p>
            </div>
            <div className="w-12 h-6 bg-gold rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">SMS Notifications</p>
              <p className="text-gray-500 text-sm">Receive SMS for new repair requests</p>
            </div>
            <div className="w-12 h-6 bg-gray-300 rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <Button className="bg-gold hover:bg-gold-dark text-black">
            Save Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
