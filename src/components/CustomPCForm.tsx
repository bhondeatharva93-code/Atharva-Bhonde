import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../config/businessInfo';
import { Wrench, CheckCircle2, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';

interface CustomPCFormProps {
  initialPurpose?: string;
}

export const CustomPCForm: React.FC<CustomPCFormProps> = ({ initialPurpose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [budget, setBudget] = useState('₹40,000 – ₹70,000');
  const [customBudget, setCustomBudget] = useState('');
  const [purpose, setPurpose] = useState('Gaming');
  const [processorPreference, setProcessorPreference] = useState('Need Expert Advice');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['Complete PC']);
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({});
  const [previewOpen, setPreviewOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPurpose) {
      setPurpose(initialPurpose);
    }
  }, [initialPurpose]);

  const budgetOptions = [
    'Under ₹30,000',
    '₹30,000 – ₹50,000',
    '₹50,000 – ₹75,000',
    '₹75,000 – ₹1,20,000',
    '₹1,20,000 – ₹2,00,000',
    '₹2,00,000+',
    'Flexible / Need Advice',
    'Other (Enter custom)',
  ];

  const purposeOptions = [
    'Gaming',
    'Video Editing',
    'Graphic Design',
    'Office Work',
    'Programming',
    'Trading and Multitasking',
    'General Use',
  ];

  const processorOptions = ['Intel', 'AMD Ryzen', 'Need Expert Advice'];

  const productOptions = [
    'Complete PC',
    'Processor',
    'Graphics Card',
    'Monitor',
    'Laptop',
    'Accessories',
  ];

  const handleProductToggle = (item: string) => {
    if (selectedProducts.includes(item)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter((p) => p !== item));
      }
    } else {
      setSelectedProducts([...selectedProducts, item]);
    }
  };

  const getEffectiveBudget = () => {
    return budget === 'Other (Enter custom)' && customBudget.trim()
      ? customBudget.trim()
      : budget;
  };

  const buildWhatsAppMessage = () => {
    const finalBudget = getEffectiveBudget();
    const productsText = selectedProducts.join(', ');
    const notes = additionalRequirements.trim() || 'None specified';

    return `Hello Computer Galaxy, I would like a quotation for a custom PC.

Name: ${name.trim()}
Mobile: ${mobile.trim()}
Budget: ${finalBudget}
Purpose: ${purpose}
Processor Preference: ${processorPreference}
Required Products: ${productsText}
Additional Requirements: ${notes}

Please suggest a suitable configuration and price.`;
  };

  const validate = () => {
    const newErrors: { name?: string; mobile?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const cleanedMobile = mobile.replace(/\s+/g, '').replace(/[-+]/g, '');
    if (!cleanedMobile) {
      newErrors.mobile = 'Please enter your mobile number.';
    } else if (cleanedMobile.length < 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const message = buildWhatsAppMessage();
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    setPreviewOpen(true);
  };

  const handleCopyMessage = () => {
    const text = buildWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="custom-pc-build" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Interactive Custom Builder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            BUILD YOUR DREAM PC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tell us what you need. Let Computer Galaxy help you choose a suitable configuration.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1 & 2: Name and Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="customerName"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2"
                >
                  Your Name <span className="text-rose-500 dark:text-rose-400">*</span>
                </label>
                <input
                  id="customerName"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-colors ${
                    errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="customerMobile"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2"
                >
                  Mobile Number <span className="text-rose-500 dark:text-rose-400">*</span>
                </label>
                <input
                  id="customerMobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                  }}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-colors ${
                    errors.mobile ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
                {errors.mobile && (
                  <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mobile}</span>
                  </p>
                )}
              </div>
            </div>

            {/* 3: Approximate Budget */}
            <div>
              <label
                className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2"
              >
                Approximate Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setBudget(opt)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors border cursor-pointer ${
                      budget === opt
                        ? 'bg-blue-600 text-white border-blue-500 font-semibold shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {budget === 'Other (Enter custom)' && (
                <input
                  type="text"
                  value={customBudget}
                  onChange={(e) => setCustomBudget(e.target.value)}
                  placeholder="Enter your target budget (e.g. ₹65,000)"
                  className="mt-3 w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>

            {/* 4: Intended Use */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2">
                Intended Use
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {purposeOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPurpose(item)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg text-left transition-colors border cursor-pointer ${
                      purpose === item
                        ? 'bg-purple-600 text-white border-purple-500 font-semibold shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 5: Processor Preference */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2">
                Processor Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {processorOptions.map((proc) => (
                  <button
                    key={proc}
                    type="button"
                    onClick={() => setProcessorPreference(proc)}
                    className={`py-2.5 px-3 text-xs font-medium rounded-lg text-center transition-colors border cursor-pointer ${
                      processorPreference === proc
                        ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                        : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {proc}
                  </button>
                ))}
              </div>
            </div>

            {/* 6: Preferred Products (Multi-select) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2">
                Preferred Products <span className="text-slate-500 dark:text-slate-400 normal-case font-normal">(Select all that apply)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {productOptions.map((prod) => {
                  const isChecked = selectedProducts.includes(prod);
                  return (
                    <button
                      key={prod}
                      type="button"
                      onClick={() => handleProductToggle(prod)}
                      className={`flex items-center gap-2.5 py-2.5 px-3 text-xs font-medium rounded-lg transition-colors border cursor-pointer ${
                        isChecked
                          ? 'bg-blue-50 dark:bg-slate-800 text-blue-900 dark:text-white border-blue-500 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                          isChecked
                            ? 'bg-blue-600 border-blue-500 text-white'
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{prod}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 7: Additional Requirements */}
            <div>
              <label
                htmlFor="additionalRequirements"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2"
              >
                Additional Requirements / Specific Components
              </label>
              <textarea
                id="additionalRequirements"
                rows={3}
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
                placeholder="Mention any specific case style, RGB lighting preference, software you plan to use, monitor size, or brand preference..."
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-colors"
              />
            </div>

            {/* Prominent Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 transition-all duration-150 flex items-center justify-center gap-3 active:scale-[0.99] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>GET MY PC QUOTATION</span>
              </button>
              <p className="mt-2.5 text-center text-xs text-slate-500 dark:text-slate-400">
                Generates a clean WhatsApp quotation message to{' '}
                <span className="text-slate-800 dark:text-slate-300 font-semibold">088528 34882</span>. You can review and edit before sending.
              </p>
            </div>
          </form>

          {/* Form Message Preview / Review Box */}
          {previewOpen && (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Quotation Inquiry Generated
                </span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                {buildWhatsAppMessage()}
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={createWhatsAppUrl(buildWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewOpen(false)}
                  className="py-2.5 px-4 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-950 rounded-lg transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
