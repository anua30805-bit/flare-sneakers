import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowLeft, Loader2, CreditCard, QrCode, Banknote, AlertCircle, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CustomerOrder } from '../types/product';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi NCR', 'Jammu & Kashmir', 'Chandigarh'
];

export const CheckoutModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    subtotal,
    shipping,
    discount,
    total,
    clearCart,
    setLastOrder,
    lastOrder
  } = useCart();

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    paymentMethod: 'razorpay' as 'razorpay' | 'upi' | 'cod'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'verifying' | 'confirmed'>('details');
  const [confirmedOrder, setConfirmedOrder] = useState<CustomerOrder | null>(null);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Valid 10-digit Indian mobile number required';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email address required';
    }
    if (!formData.address.trim()) newErrors.address = 'Street delivery address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = 'Valid 6-digit Indian PIN code required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);
    setPaymentStep('verifying');

    // Simulate verified Razorpay / UPI authorization handshake
    setTimeout(() => {
      const generatedOrder: CustomerOrder = {
        orderId: `FLR-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        paymentMethod: formData.paymentMethod,
        items: [...items],
        subtotal,
        shipping,
        discount,
        total,
        orderDate: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      };

      setConfirmedOrder(generatedOrder);
      setLastOrder(generatedOrder);
      clearCart();
      setIsProcessing(false);
      setPaymentStep('confirmed');
    }, 2400);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setPaymentStep('details');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden my-6 border border-gray-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-forest text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-black text-sm">
              FL
            </div>
            <div>
              <h2 className="font-extrabold text-base sm:text-lg tracking-tight">
                {paymentStep === 'confirmed' ? 'ORDER CONFIRMATION' : 'SECURE INDIAN CHECKOUT'}
              </h2>
              <p className="text-xs text-gray-200">
                {paymentStep === 'confirmed'
                  ? 'Your sneakers are being prepared for dispatch'
                  : 'FLARE SNEAKERS • 256-Bit SSL Encrypted'}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {paymentStep === 'confirmed' && confirmedOrder ? (
            /* Order Confirmed View */
            <div className="text-center py-6 sm:py-10 space-y-6 max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Payment Verified & Order Received
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-black mt-3">
                  Thank You, {confirmedOrder.fullName.split(' ')[0]}!
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Order ID: <strong className="font-mono text-brand-black">{confirmedOrder.orderId}</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  We have dispatched a confirmation SMS to <strong>{confirmedOrder.phone}</strong> and email receipt to <strong>{confirmedOrder.email}</strong>.
                </p>
              </div>

              {/* Order Receipt Box */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-left space-y-3">
                <div className="flex justify-between text-xs text-gray-500 border-b border-gray-200 pb-2">
                  <span>Delivery Address</span>
                  <span className="font-semibold text-brand-black text-right">
                    {confirmedOrder.address}, {confirmedOrder.city}, {confirmedOrder.state} - {confirmedOrder.pincode}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 border-b border-gray-200 pb-2">
                  <span>Payment Method</span>
                  <span className="font-semibold text-brand-black uppercase">
                    {confirmedOrder.paymentMethod === 'razorpay'
                      ? 'Razorpay (Verified Cards / NetBanking)'
                      : confirmedOrder.paymentMethod === 'upi'
                      ? 'UPI Gateway (Verified)'
                      : 'Cash on Delivery (COD)'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-brand-black pt-1">
                  <span>Total Paid (INR)</span>
                  <span className="text-forest text-base">₹{confirmedOrder.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={() => window.print()}
                  className="bg-gray-100 hover:bg-gray-200 text-brand-black text-xs font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Invoice (PDF)</span>
                </button>
                <button
                  onClick={handleClose}
                  className="bg-forest hover:bg-forest-light text-white text-xs font-bold py-3 px-6 rounded-xl transition-all shadow-md uppercase tracking-wider"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : paymentStep === 'verifying' ? (
            /* Gateway Verification Simulation */
            <div className="text-center py-20 space-y-6 max-w-md mx-auto">
              <Loader2 className="w-12 h-12 text-forest animate-spin mx-auto" />
              <div>
                <h3 className="font-extrabold text-xl text-brand-black">
                  Connecting to {formData.paymentMethod === 'razorpay' ? 'Razorpay Secure Gateway' : formData.paymentMethod === 'upi' ? 'UPI Gateway' : 'Order Validation Service'}...
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                  Please do not refresh the page or press the back button. Verifying payment token and delivery coordinates with banking servers.
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600 font-mono">
                Authenticating Transaction: ₹{total.toLocaleString('en-IN')}
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleProceedToPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Form Details */}
              <div className="lg:col-span-7 space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-brand-black mb-3">
                    1. Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anish Sharma"
                        className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                          errors.fullName ? 'border-rose-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mobile Number (+91) *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9876543210"
                        maxLength={10}
                        className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                          errors.phone ? 'border-rose-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anish@example.com"
                        className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                          errors.email ? 'border-rose-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-brand-black mb-3">
                    2. Delivery Address in India
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Flat / Building / Street Address *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Flat 402, Skyline Towers, 14th Road"
                        className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                          errors.address ? 'border-rose-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.address && <p className="text-[11px] text-rose-500 mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Mumbai"
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                            errors.city ? 'border-rose-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.city && <p className="text-[11px] text-rose-500 mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          State *
                        </label>
                        <select
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest"
                        >
                          {INDIAN_STATES.map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          placeholder="400051"
                          maxLength={6}
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                            errors.pincode ? 'border-rose-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.pincode && <p className="text-[11px] text-rose-500 mt-1">{errors.pincode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indian Payment Options */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-brand-black mb-3">
                    3. Payment Method
                  </h3>
                  <div className="space-y-2.5">
                    {/* Razorpay Option */}
                    <label
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.paymentMethod === 'razorpay'
                          ? 'border-forest bg-forest-subtle/40 ring-1 ring-forest'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="razorpay"
                        checked={formData.paymentMethod === 'razorpay'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'razorpay' })}
                        className="mt-0.5 text-forest accent-forest"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-brand-black flex items-center gap-1.5">
                            <CreditCard className="w-4 h-4 text-forest" />
                            <span>Razorpay Gateway (Recommended)</span>
                          </span>
                          <span className="text-[10px] bg-forest text-white px-2 py-0.5 rounded font-bold">
                            Instant & Fast
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Cards (Visa, Mastercard, RuPay), NetBanking (50+ banks), Cred, and Wallets.
                        </p>
                      </div>
                    </label>

                    {/* UPI Option */}
                    <label
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.paymentMethod === 'upi'
                          ? 'border-forest bg-forest-subtle/40 ring-1 ring-forest'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                        className="mt-0.5 text-forest accent-forest"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-brand-black flex items-center gap-1.5">
                            <QrCode className="w-4 h-4 text-forest" />
                            <span>Instant UPI (GPay, PhonePe, Paytm, BHIM)</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Zero transaction fee. Scan QR code or enter your VPA / UPI ID.
                        </p>
                      </div>
                    </label>

                    {/* Cash on Delivery Option */}
                    <label
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.paymentMethod === 'cod'
                          ? 'border-forest bg-forest-subtle/40 ring-1 ring-forest'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                        className="mt-0.5 text-forest accent-forest"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-brand-black flex items-center gap-1.5">
                            <Banknote className="w-4 h-4 text-forest" />
                            <span>Cash on Delivery (COD)</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Pay cash or UPI directly to the courier upon doorstep delivery inspection.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary Sidebar */}
              <div className="lg:col-span-5 bg-gray-50 p-5 rounded-2xl border border-gray-200 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-brand-black pb-3 border-b border-gray-200">
                    Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
                  </h4>

                  {/* Items Preview */}
                  <div className="max-h-56 overflow-y-auto divide-y divide-gray-200 py-2">
                    {items.map((item) => (
                      <div key={item.id} className="py-2.5 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 p-0.5 shrink-0 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-brand-black truncate">
                            {item.productName}
                          </p>
                          <p className="text-[11px] text-gray-500">
                            UK {item.selectedSize} • {item.selectedColor.name} • Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="text-xs font-extrabold text-brand-black shrink-0">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price Calculations */}
                  <div className="space-y-2 pt-3 border-t border-gray-200 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-brand-black">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Discount Savings</span>
                        <span>-₹{discount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Express Shipping</span>
                      <span className="font-semibold text-brand-black">
                        {shipping === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `₹${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-brand-black pt-3 border-t border-gray-300">
                      <span>Total (INR)</span>
                      <span className="text-forest text-xl">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isProcessing || items.length === 0}
                    className="w-full bg-forest hover:bg-forest-light text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>PAY ₹{total.toLocaleString('en-IN')} & PLACE ORDER</span>
                  </button>
                  <p className="text-[11px] text-gray-500 text-center">
                    By clicking to pay, you agree to FLARE SNEAKERS' Terms of Sale & 7-Day Exchange Policy.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
