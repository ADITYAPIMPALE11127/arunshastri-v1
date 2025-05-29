import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const paymentFaqs: FAQItem[] = [
  {
    question: "What payment methods are accepted?",
    answer: "We use Razorpay as our secure payment gateway, which supports UPI, credit/debit cards, net banking, and popular wallets like Paytm and PhonePe."
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, all transactions are processed via Razorpay, which uses industry-grade security and encryption to protect your payment details. We do not store any card or bank information on our servers."
  },
  {
    question: "What should I do if my payment fails?",
    answer: "If your payment fails, please try again or use an alternate payment method. If the amount is deducted but the order isn't confirmed, email us at support@astroarunpandit.org with your payment reference number."
  },
  {
    question: "Can I get a receipt for my payment?",
    answer: "Yes, you will receive an email receipt from Razorpay immediately after a successful transaction. If you do not receive it, please contact support with your payment details."
  }
];

  const faqs: FAQItem[] = [
    {
      question: "How accurate is the Fortune Report?",
      answer: "The Fortune Report is based on traditional Vedic astrology principles and is highly accurate. Astro Arun Pandit analyzes your birth chart in detail, considering planetary positions, aspects, and transits to provide precise insights. However, it's important to remember that astrology offers guidance, and you always have free will to shape your destiny."
    },
    {
      question: "What remedies are included in the report?",
      answer: "Your personalized Fortune Report includes specific remedial measures based on your unique birth chart. These may include recommendations for gemstones to wear, mantras to recite, yantras to place in your home or workplace, and specific rituals or practices to follow. All remedies are practical and designed to harmonize challenging planetary influences in your life."
    },
    {
      question: "Can I get the report in Hindi?",
      answer: "Yes, you can choose to receive your Fortune Report in either English or Hindi. Simply select your preferred language when filling out the order form."
    },
    {
      question: "How long does it take to receive the report?",
      answer: "After your payment is confirmed, you will receive your personalized Fortune Report within 3 working days. Each report is carefully prepared by Astro Arun Pandit himself, ensuring detailed and accurate analysis of your birth chart."
    },
    {
      question: "How is my personal information protected?",
      answer: "We take your privacy very seriously. Your personal information is securely stored and used solely for the purpose of creating your astrological report. We do not share your data with third parties for marketing purposes. Our systems use industry-standard encryption to protect your information."
    },
    {
      question: "What if I don't know my exact birth time?",
      answer: "For the most accurate reading, an exact birth time is important. However, if you don't know your exact time of birth, you can provide an approximate time, and Astro Arun Pandit will still create a report based on the available information. The report will note that certain aspects may vary due to the approximate birth time."
    },
    {
      question: "Can I ask follow-up questions after receiving my report?",
      answer: "The Fortune Report is comprehensive and designed to answer most questions about your astrological profile. However, if you have specific clarification questions about your report, you can email our support team, and we'll do our best to assist you."
    },
    {
      question: "Do you offer refunds?",
      answer: "Since each Fortune Report is personally created for you based on your birth details, we do not offer refunds once the report preparation has begun. However, if you have any concerns about your report, please contact our support team, and we'll work to address your issues."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-indigo-600" />
                    )}
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">Payment & Refunds</h2>
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  {paymentFaqs.map((faq, index) => (
    <div key={index} className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => toggleFAQ(index + faqs.length)} // ensure index is unique
      >
        <span className="font-medium text-lg">{faq.question}</span>
        {openIndex === index + faqs.length ? (
          <ChevronUp className="h-5 w-5 text-indigo-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-indigo-600" />
        )}
      </button>
      
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ${
          openIndex === index + faqs.length ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <p className="text-gray-600">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>
  
            <div className="mt-12 text-center">
              <p className="text-lg mb-4">Still have questions?</p>
              <a 
                href="mailto:support@astroarunpandit.org" 
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;