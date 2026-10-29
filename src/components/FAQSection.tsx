import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../config/businessInfo';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What products are available at Computer Galaxy?',
      answer:
        'Computer Galaxy offers computer components, laptops, printers, monitors, accessories, and other computer hardware. Contact the store to confirm the availability of a specific product.',
    },
    {
      question: 'Does Computer Galaxy build custom PCs?',
      answer:
        'You can contact Computer Galaxy to discuss a custom PC configuration according to your requirements, intended use, and budget.',
    },
    {
      question: 'Are gaming and editing PC configurations available?',
      answer:
        'Contact the store to discuss suitable gaming and video editing PC configurations based on your requirements and budget.',
    },
    {
      question: 'Does Computer Galaxy provide wholesale orders?',
      answer:
        'Yes, the business offers wholesale and retail computer hardware solutions. Contact the store for bulk order information.',
    },
    {
      question: 'Can I ask for the latest product prices?',
      answer:
        'Yes. Use the WhatsApp inquiry button or call the store to ask about current prices and availability.',
    },
    {
      question: 'Does Computer Galaxy deliver outside Sirohi?',
      answer:
        'The business states that all-India delivery is available. Contact the store to confirm delivery options, costs, and timelines for your location.',
    },
    {
      question: 'Where is Computer Galaxy located?',
      answer:
        'Computer Galaxy is located on the first floor of Iskon Plaza, Shop Nos. 30, 31, and 32, Main Bazar, near WEBLINK COMPUTER, Sirohi, Rajasthan 307001.',
    },
    {
      question: 'How can I contact Computer Galaxy?',
      answer: 'Call 088528 34882 or use the WhatsApp inquiry button on the website.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const askMoreWhatsApp = createWhatsAppUrl(
    'Hello Computer Galaxy, I have a question regarding computer hardware availability.'
  );

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Got Questions?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Quick answers about hardware products, custom computer builds, wholesale inquiries, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-950 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Help Prompt */}
        <div className="mt-10 p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Have a different question?</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Our Sirohi team is available to help directly.</p>
            </div>
          </div>
          <a
            href={askMoreWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
