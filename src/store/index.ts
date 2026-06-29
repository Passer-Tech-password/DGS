import { create } from 'zustand';
import { CartItem, Product, Order, Repair, Staff, User, SiteImage } from '@/types';

// Sample Products Data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system',
    price: 1650000,
    category: 'Smartphones',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'],
    stock: 50,
    specifications: {
      'Storage': '256GB',
      'Display': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro',
      'Camera': '48MP Pro'
    },
    reviews: [],
    createdAt: new Date('2024-05-10'),
    updatedAt: new Date('2024-05-10'),
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Flagship Samsung with S Pen, Snapdragon 8 Gen 3, and 200MP camera',
    price: 1320000,
    category: 'Smartphones',
    images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400'],
    stock: 40,
    specifications: {
      'Storage': '512GB',
      'Display': '6.8" Dynamic AMOLED',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '200MP'
    },
    reviews: [],
    createdAt: new Date('2024-05-12'),
    updatedAt: new Date('2024-05-12'),
  },
  {
    id: '3',
    name: 'MacBook Air M2',
    description: 'Ultrathin laptop with M2 chip, 18-hour battery life',
    price: 1450000,
    category: 'Laptops',
    images: ['https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400'],
    stock: 30,
    specifications: {
      'Storage': '256GB SSD',
      'Display': '13.6" Retina',
      'Processor': 'M2',
      'RAM': '8GB'
    },
    reviews: [],
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-05-15'),
  },
  {
    id: '4',
    name: 'Apple Watch Series 9',
    description: 'Health-focused smartwatch with crash detection and ECG',
    price: 650000,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400'],
    stock: 45,
    specifications: {
      'Display': '45mm Always-On Retina',
      'Case': 'Aluminum',
      'Battery': '18 Hours',
      'Features': 'ECG, Blood Oxygen'
    },
    reviews: [],
    createdAt: new Date('2024-05-18'),
    updatedAt: new Date('2024-05-18'),
  },
  {
    id: '5',
    name: 'AirPods Pro 2nd Gen',
    description: 'Wireless earbuds with active noise cancellation and USB-C',
    price: 330000,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400'],
    stock: 100,
    specifications: {
      'Connectivity': 'Bluetooth 5.3',
      'Battery': '6 Hours',
      'Charging': 'USB-C',
      'Features': 'ANC, Spatial Audio'
    },
    reviews: [],
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-20'),
  },
  {
    id: '6',
    name: 'iPad Air 5th Gen',
    description: 'Powerful iPad with M1 chip, perfect for work and creativity',
    price: 660000,
    category: 'Tablets',
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'],
    stock: 35,
    specifications: {
      'Storage': '64GB',
      'Display': '10.9" Liquid Retina',
      'Processor': 'M1',
      'Camera': '12MP'
    },
    reviews: [],
    createdAt: new Date('2024-05-22'),
    updatedAt: new Date('2024-05-22'),
  },
];

// Sample Orders Data
const sampleOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: 'user-1',
    items: [
      { productId: '1', productName: 'iPhone 15 Pro Max', productImage: sampleProducts[0].images[0], price: 1650000, quantity: 1 },
    ],
    total: 1650000,
    status: 'delivered',
    shippingAddress: 'Shop 13, Omamma Plaza, Eke Awka',
    paymentMethod: 'Card',
    paymentStatus: 'paid',
    createdAt: new Date('2024-05-28'),
    updatedAt: new Date('2024-05-30'),
  },
  {
    id: 'ORD-002',
    userId: 'user-1',
    items: [
      { productId: '3', productName: 'MacBook Air M2', productImage: sampleProducts[2].images[0], price: 1450000, quantity: 1 },
    ],
    total: 1450000,
    status: 'shipped',
    shippingAddress: 'Shop 13, Omamma Plaza, Eke Awka',
    paymentMethod: 'Transfer',
    paymentStatus: 'paid',
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-22'),
  },
  {
    id: 'ORD-003',
    userId: 'user-2',
    items: [
      { productId: '5', productName: 'AirPods Pro 2nd Gen', productImage: sampleProducts[4].images[0], price: 330000, quantity: 2 },
    ],
    total: 660000,
    status: 'processing',
    shippingAddress: '45 Azikiwe Street, Awka',
    paymentMethod: 'Cash',
    paymentStatus: 'paid',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-06-02'),
  },
];

// Sample Repairs Data
const sampleRepairs: Repair[] = [
  {
    id: 'REP-001',
    userId: 'user-1',
    userName: 'Chinedu Okafor',
    userEmail: 'chinedu.okafor@gmail.com',
    userPhone: '+234 810 123 4567',
    deviceType: 'iPhone 12',
    repairCategory: 'Screen Replacement',
    issueDescription: 'Cracked screen and broken glass',
    deviceImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    ticketNumber: 'REP-00034',
    status: 'completed',
    assignedTechnician: 'John Technician',
    notes: ['Replaced screen successfully', 'Tested all functions'],
    createdAt: new Date('2024-05-25'),
    updatedAt: new Date('2024-05-27'),
  },
  {
    id: 'REP-002',
    userId: 'user-3',
    userName: 'Amara Nwankwo',
    userEmail: 'amara.nwankwo@gmail.com',
    userPhone: '+234 803 987 6543',
    deviceType: 'Samsung Galaxy S21',
    repairCategory: 'Battery Issue',
    issueDescription: 'Battery drains very fast',
    deviceImage: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    ticketNumber: 'REP-00035',
    status: 'repairing',
    assignedTechnician: 'John Technician',
    notes: ['Diagnosed battery issue', 'Waiting for new battery'],
    createdAt: new Date('2024-06-05'),
    updatedAt: new Date('2024-06-07'),
  },
  {
    id: 'REP-003',
    userId: 'user-1',
    userName: 'Chinedu Okafor',
    userEmail: 'chinedu.okafor@gmail.com',
    userPhone: '+234 810 123 4567',
    deviceType: 'MacBook Pro',
    repairCategory: 'Overheating',
    issueDescription: 'Laptop overheats when charging',
    deviceImage: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400',
    ticketNumber: 'REP-00036',
    status: 'diagnosing',
    assignedTechnician: 'Sarah Tech',
    notes: ['Initial check in progress'],
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-11'),
  },
];

// Sample Staff Data
const sampleStaff: Staff[] = [
  {
    id: 'staff-1',
    name: 'John Technician',
    email: 'john.tech@darahgadz.com',
    phone: '+234 801 234 5678',
    role: 'technician',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'staff-2',
    name: 'Sarah Tech',
    email: 'sarah.tech@darahgadz.com',
    phone: '+234 802 345 6789',
    role: 'technician',
    createdAt: new Date('2024-02-01'),
  },
  {
    id: 'staff-3',
    name: 'Admin User',
    email: 'admin@darahgadz.com',
    phone: '+234 803 456 7890',
    role: 'super_admin',
    createdAt: new Date('2024-01-01'),
  },
];

// Sample Customers
const sampleCustomers: User[] = [
  {
    id: 'user-1',
    name: 'Chinedu Okafor',
    email: 'chinedu.okafor@gmail.com',
    phone: '+234 810 123 4567',
    address: 'Shop 13, Omamma Plaza, Eke Awka',
    role: 'customer',
    createdAt: new Date('2024-05-12'),
  },
  {
    id: 'user-2',
    name: 'Amara Nwankwo',
    email: 'amara.nwankwo@gmail.com',
    phone: '+234 803 987 6543',
    address: '45 Azikiwe Street, Awka',
    role: 'customer',
    createdAt: new Date('2024-04-20'),
  },
  {
    id: 'user-3',
    name: 'Emeka Okeke',
    email: 'emeka.okeke@gmail.com',
    phone: '+234 805 555 1234',
    address: '123 Nnewi Road, Awka',
    role: 'customer',
    createdAt: new Date('2024-03-10'),
  },
];

// Sample Site Images
const sampleSiteImages: SiteImage[] = [
  {
    id: 'img-1',
    name: 'Hero Banner',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
    publicId: 'hero-1',
    category: 'hero',
    uploadedAt: new Date('2024-05-01'),
  },
  {
    id: 'img-2',
    name: 'About Us Image',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    publicId: 'about-1',
    category: 'about',
    uploadedAt: new Date('2024-05-05'),
  },
];

interface Store {
  // Products
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;

  // User Profile (current)
  user: typeof sampleCustomers[0];

  // Orders
  orders: Order[];
  updateOrderStatus: (id: string, status: Order['status']) => void;

  // Repairs
  repairs: Repair[];
  updateRepairStatus: (id: string, status: Repair['status']) => void;

  // Admin
  staff: Staff[];
  customers: User[];
  siteImages: SiteImage[];
  addSiteImage: (image: SiteImage) => void;
  deleteSiteImage: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  // Products
  products: sampleProducts,
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  updateProduct: (id, product) => set((state) => ({
    products: state.products.map(p => p.id === id ? { ...p, ...product } : p)
  })),
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter(p => p.id !== id)
  })),

  // Cart
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(i => i.productId === item.productId);
      if (existingItem) {
        return {
          cart: state.cart.map(i =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter(i => i.productId !== productId),
    })),
  updateCartQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map(i =>
        i.productId === productId ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    })),
  clearCart: () => set({ cart: [] }),

  // Wishlist
  wishlist: ['1', '3', '5'], // Default wishlisted products
  toggleWishlist: (productId) =>
    set((state) => {
      if (state.wishlist.includes(productId)) {
        return { wishlist: state.wishlist.filter(id => id !== productId) };
      }
      return { wishlist: [...state.wishlist, productId] };
    }),

  // User Profile
  user: sampleCustomers[0],

  // Orders
  orders: sampleOrders,
  updateOrderStatus: (id, status) => set((state) => ({
    orders: state.orders.map(o => o.id === id ? { ...o, status, updatedAt: new Date() } : o)
  })),

  // Repairs
  repairs: sampleRepairs,
  updateRepairStatus: (id, status) => set((state) => ({
    repairs: state.repairs.map(r => r.id === id ? { ...r, status, updatedAt: new Date() } : r)
  })),

  // Admin
  staff: sampleStaff,
  customers: sampleCustomers,
  siteImages: sampleSiteImages,
  addSiteImage: (image) => set((state) => ({ siteImages: [...state.siteImages, image] })),
  deleteSiteImage: (id) => set((state) => ({
    siteImages: state.siteImages.filter(i => i.id !== id)
  })),
}));
