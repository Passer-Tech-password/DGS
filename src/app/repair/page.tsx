'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Upload, CheckCircle, Smartphone, Laptop, Tablet, Camera, Battery, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const deviceTypes = [
  { name: 'Smartphone', icon: Smartphone },
  { name: 'Laptop', icon: Laptop },
  { name: 'Tablet', icon: Tablet },
];

const repairCategories = [
  { name: 'Screen Replacement', icon: Camera },
  { name: 'Battery Replacement', icon: Battery },
  { name: 'Charging Port Repair', icon: Wifi },
  { name: 'Camera Repair', icon: Camera },
  { name: 'Water Damage Repair', icon: Wrench },
  { name: 'Software Issues', icon: Wrench },
];

export default function RepairPage() {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issueDescription: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full px-4"
        >
          <Card className="text-center p-8">
            <CheckCircle className="h-20 w-20 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Repair Request Submitted!</h2>
            <p className="text-gray-400 mb-6">
              Thank you! We&apos;ll contact you shortly to confirm your repair appointment. Your ticket number is{' '}
              <span className="text-gold font-semibold">DGS-{Math.floor(Math.random() * 10000)}</span>
            </p>
            <Button asChild>
              <a href="/">Go Back Home</a>
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Phone & Gadget Repair</h1>
          <p className="text-gray-400 text-lg">Professional repair services for all your devices</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Device Type */}
          <div>
            <Label className="text-lg font-semibold mb-4 block">Select Device Type</Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {deviceTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <motion.button
                    key={type.name}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDevice(type.name)}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedDevice === type.name ? 'border-gold bg-gold/10' : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                    }`}
                  >
                    <Icon className="h-10 w-10 mx-auto mb-2 text-gold" />
                    <p className="font-semibold">{type.name}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Repair Category */}
          {selectedDevice && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Label className="text-lg font-semibold mb-4 block">Select Repair Category</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {repairCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.name}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedCategory === category.name ? 'border-gold bg-gold/10' : 'border-gray-700 bg-gray-900 hover:border-gray-600'
                      }`}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-2 text-gold" />
                      <p className="font-semibold text-sm">{category.name}</p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Contact Information */}
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Your Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="issue">Describe the Issue</Label>
                      <textarea
                        id="issue"
                        required
                        rows={4}
                        value={formData.issueDescription}
                        onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                        className="mt-2 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                        placeholder="Please provide details about the issue with your device..."
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Upload Device Image (Optional)</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer">
                        <Upload className="h-10 w-10 mx-auto mb-2 text-gray-500" />
                        <p className="text-gray-400">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button type="submit" size="lg" className="w-full">
                <Wrench className="mr-2 h-5 w-5" />
                Book Repair Appointment
              </Button>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}
