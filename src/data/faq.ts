export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders' | 'Sizing' | 'Payments' | 'Shipping' | 'Returns';
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I order sneakers on FLARE?',
    answer:
      'Ordering on FLARE is simple and streamlined: Browse our Men\'s collections, select your desired model, pick your UK size and colourway, then click "ADD TO CART" or "BUY NOW". Head to checkout, input your delivery address, choose your preferred Indian payment method (Razorpay, UPI, or Cash on Delivery), and confirm your order. You will receive an instant order confirmation via SMS and email.',
    category: 'Orders'
  },
  {
    id: 'faq-2',
    question: 'How do I choose my exact shoe size?',
    answer:
      'All FLARE sneakers follow standard Indian / UK men\'s sizing (UK 6 to UK 11). We recommend ordering your everyday sneaker size. If you fall between sizes or have a wider foot, we advise selecting one half-size up (or the next full size up). You can also click the "Size Guide" button on any product page for exact centimetre foot measurements and comparison charts against EU and US standards.',
    category: 'Sizing'
  },
  {
    id: 'faq-3',
    question: 'What payment methods are available?',
    answer:
      'We support all major Indian and international payment methods secured via Razorpay 256-bit SSL encryption: UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit & Debit Cards (Visa, Mastercard, RuPay, Amex), Net Banking across 50+ Indian banks, and Cash on Delivery (COD) for eligible pincodes across India.',
    category: 'Payments'
  },
  {
    id: 'faq-4',
    question: 'How long does delivery take?',
    answer:
      'All orders are processed and dispatched from our central warehouse within 24 business hours. Metro cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune) typically receive delivery in 2 to 4 business days. Rest of India deliveries arrive within 4 to 6 business days. Express tracking updates are shared automatically via WhatsApp and SMS.',
    category: 'Shipping'
  },
  {
    id: 'faq-5',
    question: 'Can I exchange or return my shoes if they don’t fit?',
    answer:
      'Yes, absolutely. We offer a hassle-free 7-Day Doorstep Exchange & Return Policy on all unworn pairs in original packaging. If you need a different size or colour, our reverse courier will pick up the current pair right from your doorstep and deliver your exchange completely free of charge. For returns, refunds are credited back to your original source within 48 hours of pickup inspection.',
    category: 'Returns'
  },
  {
    id: 'faq-6',
    question: 'How can I track my order once placed?',
    answer:
      'Once your pair is packed and handed over to our premium courier partners (BlueDart / Delhivery / DTDC), you will receive a tracking link via WhatsApp, SMS, and Email. You can also track your live shipment directly on our website or get in touch with our concierge team anytime.',
    category: 'Shipping'
  }
];
