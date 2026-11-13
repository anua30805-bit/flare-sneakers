import React, { useState } from 'react';
import { FAQS } from '../data/faq';
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Send,
  CheckCircle2,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

export const AboutContactPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

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

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

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

  const pillars = [
    {
      title: 'Quality-Focused Products',
      desc: 'Selected full-grain leathers, durable vulcanized gum outsoles, and precision craftsmanship engineered for years of wear.'
    },
    {
      title: 'Modern Men\'s Fashion',
      desc: 'Clean, understated international aesthetic that harmonizes effortlessly with denim, chinos, sweatpants, and tailored trousers.'
    },
    {
      title: 'Everyday Comfort',
      desc: 'Ergonomic footbeds with targeted arch reinforcement and impact-dispersing midsole materials made for all-day movement.'
    },
    {
      title: 'Stylish Collections',
      desc: 'Four distinctive men\'s silhouettes—from terrace classics and high-tops to athletic runners and minimal luxury.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-white min-h-screen space-y-24 sm:space-y-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. BRAND STORY SECTION */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-forest-subtle text-forest px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR STORY & PHILOSOPHY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-brand-black tracking-tight uppercase leading-tight">
                MORE THAN SNEAKERS. <br />
                <span className="text-forest">IT'S A LIFESTYLE.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                FLARE SNEAKERS is a men's footwear brand built around modern sneaker culture, everyday comfort and personal style. We believe every step represents confidence. Our mission is to bring stylish, comfortable and quality-focused sneakers to men who want to express themselves through fashion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider text-forest">
                    OUR MISSION
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    To make modern sneaker fashion accessible through stylish designs, quality-focused footwear and a great shopping experience.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider text-forest">
                    OUR VISION
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    To become a recognised men's sneaker brand known for style, comfort and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Editorial Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/5] bg-gray-100 group">
                <img
                  src="/images/about-editorial.jpg"
                  alt="Men's Sneaker Lifestyle Editorial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-300">
                    MASCULINE MINIMALISM
                  </span>
                  <div className="font-black text-xl tracking-tight uppercase mt-1">
                    BUILT FOR MEN. MADE FOR EVERY STEP.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Grid */}
          <div className="pt-8">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <h2 className="text-xs font-extrabold tracking-widest text-forest uppercase">
                THE FOUNDATIONS
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight uppercase">
                WHY CHOOSE US
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-premium transition-all space-y-3"
                >
                  <span className="text-xs font-mono font-bold text-forest">0{idx + 1}.</span>
                  <h4 className="font-extrabold text-base text-brand-black">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section className="space-y-8 bg-gray-50/70 p-6 sm:p-12 rounded-3xl border border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-forest uppercase">
              HELP & GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Everything you need to know about ordering, sizing, payments, and 7-day doorstep returns.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-black hover:text-forest transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-500">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. CONTACT CONCIERGE & DETAILS */}
        <section id="contact" className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold tracking-widest text-forest uppercase">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight uppercase leading-tight">
                  WE'RE HERE FOR <br />
                  <span className="text-forest">EVERY STEP.</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Have a question regarding shoe fit, international shipping, corporate bulk orders, or an ongoing order? Reach out to our dedicated concierge.
                </p>
              </div>

              {/* Editable Business Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-brand-black">
                      Headquarters & Experience Studio
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      FLARE SNEAKERS PVT LTD <br />
                      Level 4, Maker Maxity, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-brand-black">
                      Business & Concierge Email
                    </h4>
                    <a
                      href="mailto:support@flaresneakers.com"
                      className="text-xs text-forest font-bold hover:underline mt-1 block"
                    >
                      support@flaresneakers.com
                    </a>
                    <p className="text-[11px] text-gray-400">Response within 4-6 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-brand-black">
                      WhatsApp Priority Support
                    </h4>
                    <a
                      href="https://wa.me/919207560571"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-forest font-bold hover:underline mt-1 block"
                    >
                      +91 92075 60571
                    </a>
                    <p className="text-[11px] text-gray-400">Mon - Sat: 10:00 AM – 8:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-brand-black text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-brand-black">
                      Official Instagram
                    </h4>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-forest font-bold hover:underline mt-1 block"
                    >
                      @flaresneakers
                    </a>
                    <p className="text-[11px] text-gray-400">Follow for drops, styling guides & stories</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <div className="mb-6">
                <h3 className="font-black text-xl text-brand-black uppercase tracking-tight">
                  SEND US A MESSAGE
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in the details below and our team will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-emerald-900">Message Delivered</h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. A ticket has been created with our concierge team. We will respond to your email within 4 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-forest text-white text-xs font-bold px-6 py-2.5 rounded-xl uppercase tracking-wider shadow-sm"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Kapoor"
                        className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                          formErrors.fullName ? 'border-rose-500' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className={`w-full bg-gray-50 border rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest ${
                          formErrors.email ? 'border-rose-500' : 'border-gray-200'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 92075 60571"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest font-medium"
                      >
                        <option value="Order & Sizing Inquiry">Order & Sizing Inquiry</option>
                        <option value="Return / Size Exchange Request">Return / Size Exchange Request</option>
                        <option value="Product Material & Care Question">Product Material & Care Question</option>
                        <option value="Corporate / Bulk Order Inquiry">Corporate / Bulk Order Inquiry</option>
                        <option value="Press & Partnership">Press & Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you with your sneaker selection or order?"
                      className={`w-full bg-gray-50 border rounded-xl p-3.5 text-xs text-brand-black focus:outline-none focus:bg-white focus:border-forest leading-relaxed ${
                        formErrors.message ? 'border-rose-500' : 'border-gray-200'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest hover:bg-forest-light text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
