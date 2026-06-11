import React, { useState, FormEvent } from 'react';
import { X, Plus, Minus, Trash2, ShieldCheck, Check } from 'lucide-react';
import { CartItem } from '../../customHooks/useCart';
import { TEXT_CONSTANTS } from '../../constants/textConstants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart,
  clearCart,
  cartTotal
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Karachi',
    paymentMethod: 'cod',
  });

  if (!isOpen) return null;

  const formatPrice = (amount: number) => {
    return `${TEXT_CONSTANTS.CURRENCY_PREFIX} ${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill out all shipping details.');
      return;
    }
    // Simulate API order placement
    setCheckoutComplete(true);
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      setCheckoutComplete(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans" id="shopping-cart-drawer-overlay">
      {/* Background slide backdrop */}
      <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-4 md:pl-10" id="shopping-cart-drawer">
        <div className="w-screen max-w-sm md:max-w-md bg-white flex flex-col shadow-2xl relative animate-in slide-in-from-right duration-300">
          
          {/* Header section */}
          <div className="px-4 md:px-5 py-4 md:py-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-base md:text-lg font-bold text-neutral-900 tracking-wide">
              {isCheckingOut ? "Secure Checkout" : TEXT_CONSTANTS.CART_TITLE}
            </h3>
            <button onClick={onClose} className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <X className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
            </button>
          </div>

          {/* Checkout Completed screen */}
          {checkoutComplete ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5 animate-bounce">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-lg font-extrabold text-neutral-900 mb-2">Order Confirmed!</h4>
              <p className="text-sm text-gray-600 font-light max-w-xs mb-4">
                Thank you for shopping with Inam Mens, <span className="font-semibold">{customerInfo.name}</span>! Your order is being processed for shipment.
              </p>
              <div className="bg-white border border-gray-100 rounded-lg p-4 w-full text-left text-xs mb-6 text-gray-700 space-y-1.5">
                <p><strong>Deliver To:</strong> {customerInfo.address}, {customerInfo.city}</p>
                <p><strong>Phone Support:</strong> {customerInfo.phone}</p>
                <p><strong>Mode of Payment:</strong> {customerInfo.paymentMethod.toUpperCase()}</p>
                <p className="text-emerald-600 font-bold"><strong>Estimation Delivery:</strong> 3-5 Working Days</p>
              </div>
              <p className="text-xs text-gray-400">Order processing... initializing client portal.</p>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Details Form screen */
            <form onSubmit={handleSubmitOrder} className="flex-1 flex flex-col overflow-y-auto p-4 md:p-5 space-y-3 md:space-y-4">
              <div className="bg-neutral-50 px-3 md:px-3.5 py-2 md:py-2.5 rounded border border-gray-100">
                <p className="text-[10px] md:text-xs text-neutral-800 font-bold mb-1.5">Summary of Selection</p>
                <div className="flex justify-between items-center text-[10px] md:text-xs">
                  <span className="text-gray-500">Items Count:</span>
                  <span className="font-extrabold text-neutral-900">
                    {cartItems.reduce((acc, current) => acc + current.quantity, 0)} Pcs
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span className="text-gray-500">Total Bill Payable:</span>
                  <span className="font-extrabold text-red-600">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label htmlFor="checkout-name" className="block text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
                  <input
                    type="text"
                    id="checkout-name"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2.5 md:px-3 py-1.5 md:py-2 text-xs md:text-sm text-neutral-800 focus:border-black outline-none bg-white"
                    placeholder="Enter your first & last name"
                  />
                </div>

                <div>
                  <label htmlFor="checkout-phone" className="block text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">WhatsApp / Contact No.</label>
                  <input
                    type="tel"
                    id="checkout-phone"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2.5 md:px-3 py-1.5 md:py-2 text-xs md:text-sm text-neutral-800 focus:border-black outline-none bg-white"
                    placeholder="e.g. 03306275467"
                  />
                </div>

                <div>
                  <label htmlFor="checkout-address" className="block text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Complete Delivery Address</label>
                  <textarea
                    id="checkout-address"
                    required
                    rows={2}
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2.5 md:px-3 py-1.5 md:py-2 text-xs md:text-sm text-neutral-800 focus:border-black outline-none bg-white"
                    placeholder="Apartment, Studio, Street, Sector address"
                  />
                </div>

                <div>
                  <label htmlFor="checkout-city" className="block text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">City Selection</label>
                  <select
                    id="checkout-city"
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, city: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2.5 md:px-3 py-1.5 md:py-2 text-xs md:text-sm text-neutral-800 focus:border-black outline-none bg-white cursor-pointer"
                  >
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Multan">Multan</option>
                    <option value="Quetta">Quetta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Payment Support Option</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-2.5">
                    <label className={`flex items-center gap-2 border rounded p-2.5 text-xs font-bold cursor-pointer select-none transition-all ${
                      customerInfo.paymentMethod === 'cod' ? 'border-neutral-900 bg-neutral-50/70' : 'border-gray-200 hover:bg-gray-50'
                    }`}>
                      <input
                        type="radio"
                        name="payment_opt"
                        checked={customerInfo.paymentMethod === 'cod'}
                        onChange={() => setCustomerInfo(prev => ({ ...prev, paymentMethod: 'cod' }))}
                        className="text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>Cash On Delivery</span>
                    </label>
                    <label className={`flex items-center gap-2 border rounded p-2.5 text-xs font-bold cursor-pointer select-none transition-all ${
                      customerInfo.paymentMethod === 'alfa_pay' ? 'border-purple-600 bg-purple-50/40' : 'border-gray-200 hover:bg-gray-55'
                    }`}>
                      <input
                        type="radio"
                        name="payment_opt"
                        checked={customerInfo.paymentMethod === 'alfa_pay'}
                        onChange={() => setCustomerInfo(prev => ({ ...prev, paymentMethod: 'alfa_pay' }))}
                        className="text-purple-600 focus:ring-purple-600"
                      />
                      <span>Alfa Installments</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex-grow flex items-end">
                <div className="w-full space-y-2 pt-4 border-t border-gray-100">
                  <button
                    type="submit"
                    className="w-full bg-neutral-900 text-white font-extrabold text-xs md:text-sm py-2.5 md:py-3 rounded-md hover:bg-neutral-800 transition-colors shadow shadow-neutral-300 md:shadow-none cursor-pointer"
                    id="submit-secured-payment"
                  >
                    Confirm & Submit Order ({formatPrice(cartTotal)})
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-full text-center text-[10px] md:text-xs font-bold text-gray-500 hover:text-black py-2 cursor-pointer"
                  >
                    Modify Cart Selection
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Items List screen */
            <>
              <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-3 md:space-y-4" id="cart-drawer-items-list-wrapper">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-4/5 text-center px-4" id="empty-cart-tracker">
                    <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p className="text-sm text-neutral-800 font-bold">{TEXT_CONSTANTS.CART_EMPTY}</p>
                    <button
                      onClick={onClose}
                      className="mt-4 bg-neutral-900 text-white text-xs font-bold px-6 py-2.5 rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      {TEXT_CONSTANTS.CONTINUE_SHOPPING}
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 py-3 border-b border-gray-100 text-sm"
                      id={`cart-item-${item.product.id}`}
                    >
                      {/* Product Card Thumbs */}
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-16 md:w-16 md:h-20 object-cover object-top rounded border border-gray-100 shadow-xxs bg-neutral-50"
                      />

                      {/* Detail Column */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-neutral-800 truncate text-[11px] md:text-xs">{item.product.name}</h4>
                        <p className="text-[10px] md:text-xs text-gray-500 font-light mt-0.5">Code: {item.product.code} | {item.product.color}</p>
                        <p className="text-[11px] md:text-xs font-extrabold text-red-600 mt-1">{formatPrice(item.product.price)}</p>

                        {/* Quantity triggers & counters */}
                        <div className="flex items-center gap-2.5 mt-2.5">
                          <div className="flex items-center border border-gray-200 rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 px-1.5 text-gray-500 hover:text-black cursor-pointer hover:bg-gray-50"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 H-3" />
                            </button>
                            <span className="text-xs font-bold w-6 text-center select-none">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 px-1.5 text-gray-500 hover:text-black cursor-pointer hover:bg-gray-50"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 H-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1 text-gray-400 hover:text-red-650 cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Subtotal Checkout checkout panels */}
              {cartItems.length > 0 && (
                <div className="p-4 md:p-5 border-t border-gray-100 bg-neutral-50/70">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-xs md:text-sm font-bold text-neutral-700">{TEXT_CONSTANTS.SUBTOTAL}:</span>
                    <span className="text-sm md:text-base font-extrabold text-red-600">{formatPrice(cartTotal)}</span>
                  </div>

                  <p className="text-[10px] md:text-[11px] text-gray-500 font-light leading-relaxed mb-3 md:mb-4 flex items-start gap-1.5">
                    <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
                    <span>Split your checkout bill into easy interest-free monthly installments via partner networks. Select Alfa Installments at next screen.</span>
                  </p>

                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full bg-neutral-900 text-white text-sm font-extrabold py-3 rounded-md hover:bg-neutral-800 transition-colors tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow shadow-neutral-200 md:shadow-none"
                    id="checkout-trigger-btn"
                  >
                    <span>{TEXT_CONSTANTS.CHECKOUT}</span>
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
