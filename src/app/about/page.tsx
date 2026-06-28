'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Truck, Users, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  { name: 'Emeka Okafor', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200' },
  { name: 'Aisha Musa', role: 'Head of Repairs', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
  { name: 'David Adebayo', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
];

const whyChooseUs = [
  { icon: Award, title: 'Genuine Products', description: '100% authentic gadgets from trusted manufacturers' },
  { icon: Shield, title: 'Warranty & Support', description: 'Comprehensive warranty and after-sales service' },
  { icon: Truck, title: 'Fast Delivery', description: 'Same-day delivery available in Awka and environs' },
  { icon: Zap, title: 'Quick Repairs', description: 'Most repairs completed within 24 hours' },
  { icon: Users, title: 'Expert Team', description: 'Certified technicians with years of experience' },
  { icon: CheckCircle, title: 'Customer Satisfaction', description: 'Thousands of happy customers since 2018' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">About DARAH Gadget Store</h1>
            <p className="text-xl text-gray-400">Your trusted partner for premium gadgets and professional repair services in Awka, Nigeria</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 text-lg mb-4">
              Founded in 2018, DARAH Gadget Store began with a simple mission: to provide the people of Awka and beyond with access to genuine, high-quality gadgets at affordable prices, backed by exceptional repair services.
            </p>
            <p className="text-gray-400 text-lg mb-4">
              Starting as a small shop in Omamma Plaza, we&apos;ve grown to become the leading gadget store in Anambra State, known for our commitment to quality, transparency, and customer satisfaction.
            </p>
            <p className="text-gray-400 text-lg">
              Today, we continue to innovate and expand our services, always putting our customers first and striving to exceed their expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold rounded-3xl blur-3xl opacity-10"></div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
              alt="Our store"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-gold" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden text-center">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
