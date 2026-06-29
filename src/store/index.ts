import { create } from 'zustand';
import { CartItem, Product, Order, Repair } from '@/types';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    description: 'Latest iPhone with A17 Pro chip',
    price: 1650000,
    category: 'Smartphones',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'],
    stock: 50,
    specifications: {},
    reviews: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'MacBook Air M2 256GB SSD',
    description: 'Lightweight laptop with M2 chip',
    price: 1450000,
    category: 'Laptops',
    images: ['https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400'],
    stock: 30,
    specifications: {},
    reviews: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'AirPods Pro 2nd Gen',
    description: 'Wireless earbuds with active noise cancellation',
    price: 350000,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400'],
    stock: 100,
    specifications: {},
    reviews: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: 'Apple Watch Series 9',
    description: 'Smartwatch with health tracking features',
    price: 550000,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400'],
    stock: 45,
    specifications: {},
    reviews: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Flagship Samsung smartphone',
    price: 1320000,
    category: 'Smartphones',
    images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400'],
    stock: 40,
    specifications: {},
    reviews: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6',
    name: 'iPad Air 8th Gen 64GB',
    description: 'Powerful iPad for work and play',
    price: 800000,
    category: 'Tablets',
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'],
    stock: 35,
    specifications: {},
    reviews: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Sample orders
const sampleOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: 'user1',
    items: [
      {
        productId: '1',
        productName: 'iPhone 15 Pro Max 256GB',
        productImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
        price: 1650000,
        quantity: 1,
      },
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
    userId: 'user1',
    items: [
      {
        productId: '2',
        productName: 'MacBook Air M2 256GB SSD',
        productImage: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400',
        price: 1450000,
        quantity: 1,
      },
    ],
    total: 1450000,
    status: 'delivered',
    shippingAddress: 'Shop 13, Omamma Plaza, Eke Awka',
    paymentMethod: 'Transfer',
    paymentStatus: 'paid',
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-22'),
  },
  {
    id: 'ORD-003',
    userId: 'user1',
    items: [
      {
        productId: '3',
        productName: 'AirPods Pro 2nd Gen',
        productImage: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
        price: 350000,
        quantity: 1,
      },
    ],
    total: 350000,
    status: 'delivered',
    shippingAddress: 'Shop 13, Omamma Plaza, Eke Awka',
    paymentMethod: 'Cash',
    paymentStatus: 'paid',
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-05-17'),
  },
  {
    id: 'ORD-004',
    userId: 'user1',
    items: [
      {
        productId: '4',
        productName: 'Apple Watch Series 9',
        productImage: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400',
        price: 550000,
        quantity: 1,
      },
    ],
    total: 550000,
    status: 'delivered',
    shippingAddress: 'Shop 13, Omamma Plaza, Eke Awka',
    paymentMethod: 'Card',
    paymentStatus: 'paid',
    createdAt: new Date('2024-05-10'),
    updatedAt: new Date('2024-05-12'),
  },
];

// Sample repairs
const sampleRepairs: Repair[] = [
  {
    id: 'REP-001',
    userId: 'user1',
    userName: 'Chinedu Okafor',
    userEmail: 'chinedu.okafor@gmail.com',
    userPhone: '+234 810 123 4567',
    deviceType: 'iPhone',
    repairCategory: 'Screen Replacement',
    issueDescription: 'Cracked screen',
    deviceImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    ticketNumber: 'REP-00034',
    status: 'completed',
    notes: [],
    createdAt: new Date('2024-05-25'),
    updatedAt: new Date('2024-05-27'),
  },
  {
    id: 'REP-002',
    userId: 'user1',
    userName: 'Chinedu Okafor',
    userEmail: 'chinedu.okafor@gmail.com',
    userPhone: '+234 810 123 4567',
    deviceType: 'Samsung',
    repairCategory: 'Battery Issue',
    issueDescription: 'Battery draining fast',
    deviceImage: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    ticketNumber: 'REP-00033',
    status: 'repairing',
    notes: [],
    createdAt: new Date('2024-05-18'),
    updatedAt: new Date('2024-05-20'),
  },
  {
    id: 'REP-003',
    userId: 'user1',
    userName: 'Chinedu Okafor',
    userEmail: 'chinedu.okafor@gmail.com',
    userPhone: '+234 810 123 4567',
    deviceType: 'MacBook',
    repairCategory: 'Overheating',
    issueDescription: 'Overheating when charging',
    deviceImage: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=400',
    ticketNumber: 'REP-00032',
    status: 'diagnosing',
    notes: [],
    createdAt: new Date('2024-05-12'),
    updatedAt: new Date('2024-05-13'),
  },
];

// User profile
const userProfile = {
  id: 'user1',
  name: 'Chinedu Okafor',
  email: 'chinedu.okafor@gmail.com',
  phone: '+234 810 123 4567',
  memberSince: new Date('2024-05-12'),
};

interface Store {
  // Products
  products: Product[];

  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  // Wishlist
  wishlist: string[]; // store product ids
  toggleWishlist: (productId: string) => void;

  // User Profile
  user: typeof userProfile;

  // Orders
  orders: Order[];

  // Repairs
  repairs: Repair[];
}

export const useStore = create<Store>((set) => ({
  products: sampleProducts,
  cart: [],
  wishlist: ['1', '2', '3', '4', '5', '6'],
  user: userProfile,
  orders: sampleOrders,
  repairs: sampleRepairs,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
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
      cart: state.cart.filter((i) => i.productId !== productId),
    })),
  updateCartQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.productId === productId ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    })),
  toggleWishlist: (productId) =>
    set((state) => {
      if (state.wishlist.includes(productId)) {
        return {
          wishlist: state.wishlist.filter((id) => id !== productId),
        };
      }
      return { wishlist: [...state.wishlist, productId] };
    }),
  clearCart: () => set({ cart: [] }),
}));
