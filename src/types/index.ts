export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  specifications: Record<string, string>;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  role: 'customer' | 'admin' | 'sales' | 'technician';
  createdAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
}

export interface Repair {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  deviceType: string;
  repairCategory: string;
  issueDescription: string;
  deviceImage: string;
  ticketNumber: string;
  status: 'received' | 'diagnosing' | 'repairing' | 'completed' | 'delivered';
  assignedTechnician?: string;
  notes: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
}

export interface Staff {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'sales' | 'technician';
  phone: string;
  createdAt: Date;
}