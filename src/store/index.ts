import { create } from 'zustand';
import { CartItem } from '@/types';

interface Store {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  clearCart: () => void;
}

export const useStore = create<Store>((set) => ({
  cart: [],
  wishlist: [],
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
        i.productId === productId ? { ...i, quantity } : i
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
