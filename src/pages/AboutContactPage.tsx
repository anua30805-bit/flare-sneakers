import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export const AboutContactPage: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Order & Sizing Inquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errors.message = 'Please type your message';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: 'Order & Sizing Inquiry',
      message: ''
    });
  };

  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* UNIFIED ABOUT & CONTACT SECTION */}
        <section className="space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-forest-subtle text-forest px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT & CONTACT CONCIERGE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black tracking-tight uppercase leading-tight">
              MORE THAN SNEAKERS. <br />
              <span className="text-forest">WE'RE HERE FOR EVERY STEP.</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
              FLARE SNEAKERS is an exclusive men's footwear atelier built on modern sneaker culture, masculine silhouettes, and dedicated concierge support.
            </p>
          </div>

          {/* 2-Column Unified Layout: About on Left, Contact on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT: About Story, Lifestyle Image & Brand Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              {/* Editorial Lifestyle Visual */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/5] bg-gray-100 group">
                <img
                  src="/images/about-editorial.jpg"
                  alt="Men's Sneaker Lifestyle Editorial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-300">
                    MASCULINE MINIMALISM
                  </span>
                  <div className="font-black text-xl sm:text-2xl tracking-tight uppercase mt-1">
                    BUILT FOR MEN. MADE FOR EVERY STEP.
                  </div>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider text-forest">
                    OUR MISSION
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To make modern sneaker fashion accessible through stylish designs, quality-focused leathers, and a great shopping experience.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-1.5">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider text-forest">
                    OUR VISION
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To become India's recognized men's sneaker brand known for timeless style, everyday comfort, and customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Brand Guarantees */}
              <div className="p-5 rounded-2xl bg-forest-subtle/40 border border-forest-light/10 grid grid-cols-2 gap-3 text-xs font-semibold text-brand-black">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                  <span>100% Men's Exclusive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>Free Express Delivery Above ₹1,999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-forest shrink-0" />
                  <span>7-Day Doorstep Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-forest shrink-0" />
                  <span>WhatsApp Priority Support</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Direct Contact Channels & Interactive Message Form */}
            <div className="lg:col-span-6 space-y-6">
              {/* Direct Touchpoints Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-brand-black">
                      WhatsApp Priority
                    </h4>
                    <a
                      href="https://wa.me/919207560571"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-forest font-bold hover:underline block truncate mt-0.5"
                    >
                      +91 92075 60571
                    </a>
                    <span className="text-[10px] text-gray-400">Instant Chat Available</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-forest text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-brand-black">
                      Concierge Email
                    </h4>
                    <a
                      href="mailto:support@flaresneakers.com"
                      className="text-xs text-forest font-bold hover:underline block truncate mt-0.5"
                    >
                      support@flaresneakers.com
                    </a>
                    <span className="text-[10px] text-gray-400">Reply within 4 hours</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-black text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-brand-black">
                      Studio Location
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5 truncate">
                      BKC, Mumbai 400051
                    </p>
                    <span className="text-[10px] text-gray-400">Maker Maxity Level 4</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-brand-black">
                      Official Instagram
                    </h4>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-forest font-bold hover:underline block truncate mt-0.5"
                    >
                      @flaresneakers
                    </a>
                    <span className="text-[10px] text-gray-400">Drops & Lookbooks</span>
                  </div>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm space-y-5">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-black text-lg text-brand-black uppercase tracking-tight">
                    SEND US A MESSAGE
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Have a question on sizing, styling, or orders? Drop us a note below.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-base text-emerald-900">Message Delivered</h4>
                    <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. A ticket has been created with our concierge team. We will respond to your email within 4 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-forest text-white text-xs font-bold px-5 py-2 rounded-xl uppercase tracking-wider shadow-sm mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rahul Kapoor"
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                            formErrors.fullName ? 'border-rose-500' : 'border-gray-200'
                          }`}
                        />
                        {formErrors.fullName && (
                          <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                            formErrors.email ? 'border-rose-500' : 'border-gray-200'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Phone (WhatsApp)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 92075 60571"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Inquiry Type
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest font-medium"
                        >
                          <option value="Order & Sizing Inquiry">Order & Sizing Inquiry</option>
                          <option value="Return / Size Exchange Request">Return / Size Exchange Request</option>
                          <option value="Product Material & Care Question">Product Material & Care Question</option>
                          <option value="Corporate / Bulk Order Inquiry">Corporate / Bulk Order Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we assist you with your sneaker selection or order?"
                        className={`w-full bg-gray-50 border rounded-xl p-3 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest leading-relaxed ${
                          formErrors.message ? 'border-rose-500' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-forest hover:bg-forest-light text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
