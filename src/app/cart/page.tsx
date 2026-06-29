'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Truck,
  Award,
  Lock,
  Clock,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';

// Format price as ₦
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price).replace('NGN', '₦');
};

export default function CartPage() {
  const { cart, products, removeFromCart, updateCartQuantity, clearCart, toggleWishlist, wishlist } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cart.length > 0 ? 2500 : 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-gray-400 text-xs mb-6">
          Home <span className="mx-2">/</span> <span className="text-white">Shopping Cart</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <ShoppingCart className="h-6 w-6 text-gold" />
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Cart Items */}
          <div className="flex-1">
            {cart.length === 0 ? (
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-12 text-center">
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
                <p className="text-gray-400 mb-6">Add some products to your cart to continue</p>
                <Link href="/shop">
                  <Button className="bg-gold hover:bg-gold/90 text-primary-black font-semibold">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden">
                {/* Cart Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-800 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-gray-800">
                  {cart.map((item) => {
                    const product = products.find((p) => p.id === item.productId);
                    if (!product) return null;

                    const itemSubtotal = item.price * item.quantity;
                    const isInWishlist = wishlist.includes(item.productId);

                    return (
                      <div key={item.productId} className="grid grid-cols-12 gap-4 px-6 py-5 items-center">
                        {/* Checkbox & Image & Name */}
                        <div className="col-span-6 flex items-center gap-4">
                          <input type="checkbox" defaultChecked className="w-4 h-4 accent-gold" />
                          <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-white text-sm font-medium">{item.productName}</h3>
                            <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                              <Award className="h-3 w-3" /> In Stock
                            </p>
                            <div className="flex gap-4 mt-2">
                              <button
                                onClick={() => isHydrated && toggleWishlist(item.productId)}
                                className="text-gold text-xs flex items-center gap-1 hover:underline"
                              >
                                <Heart className={`h-3.5 w-3.5 ${isInWishlist ? 'fill-gold' : ''}`} />
                                {isInWishlist ? 'In Wishlist' : 'Move to Wishlist'}
                              </button>
                              <button
                                onClick={() => removeFromCart(item.productId)}
                                className="text-gray-400 text-xs flex items-center gap-1 hover:text-red-400 hover:underline"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-right text-gold font-bold text-sm">
                          {formatPrice(item.price)}
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2 flex items-center justify-center">
                          <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
                            <button
                              onClick={() => isHydrated && updateCartQuantity(item.productId, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-10 h-8 flex items-center justify-center bg-gray-900 text-white text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => isHydrated && updateCartQuantity(item.productId, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="col-span-2 text-right text-gold font-bold text-sm">
                          {formatPrice(itemSubtotal)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cart Footer */}
                <div className="px-6 py-6 flex items-center justify-between border-t border-gray-800">
                  <Link href="/shop">
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      CONTINUE SHOPPING
                    </Button>
                  </Link>
                  <Button variant="ghost" className="text-gray-400 hover:text-red-400 border border-gray-700" onClick={clearCart}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    CLEAR CART
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-80 flex-shrink-0">
            {cart.length > 0 && (
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6 sticky top-8">
                <h2 className="text-white font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Shipping Fee</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Discount</span>
                    <span className="text-green-500">- {formatPrice(discount)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-800 my-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-lg">Total</span>
                    <span className="text-gold font-bold text-2xl">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button className="w-full bg-gold hover:bg-gold/90 text-primary-black font-bold text-sm mt-6 h-12">
                  PROCEED TO CHECKOUT →
                </Button>

                {/* Secure Checkout Badge */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  <span className="text-gold font-semibold">Secure Checkout</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Your payment information is safe with us.</p>

                {/* Payment Methods */}
                <div className="mt-6 border-t border-gray-800 pt-4">
                  <p className="text-gray-500 text-xs mb-3 font-semibold">We Accept:</p>
                  <div className="flex gap-2 flex-wrap">
                    {['VISA', 'Mastercard', 'Verve', 'Paystack', 'Apple Pay'].map((payment, idx) => (
                      <div key={idx} className="bg-gray-800 px-3 py-1.5 rounded text-white text-xs font-bold flex items-center gap-1">
                        <CreditCard className="h-3 w-3 text-gold" />
                        {payment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-2">
                <ShieldCheck className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1">100% Genuine Products</h3>
              <p className="text-gray-500 text-xs">Original & authentic gadgets</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1">1 Year Warranty</h3>
              <p className="text-gray-500 text-xs">Warranty on all devices</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-2">
                <Truck className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1">Fast & Secure Delivery</h3>
              <p className="text-gray-500 text-xs">Nationwide delivery</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-2">
                <Lock className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1">Secure Payments</h3>
              <p className="text-gray-500 text-xs">100% secure payments</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1">24/7 Customer Support</h3>
              <p className="text-gray-500 text-xs">We're here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
