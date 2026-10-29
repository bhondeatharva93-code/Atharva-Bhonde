import React from 'react';
import { Cpu, Sliders, Layers, Award, HelpCircle, Truck } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      title: 'Computer Hardware Solutions',
      description:
        'Explore computer components, peripherals, laptops, printers, and other computer essentials.',
      icon: Cpu,
    },
    {
      title: 'Custom PC Configurations',
      description:
        'Get assistance choosing a PC configuration that suits your intended use and budget.',
      icon: Sliders,
    },
    {
      title: 'Wholesale and Retail',
      description:
        'Computer hardware solutions for individual customers and bulk buyers.',
      icon: Layers,
    },
    {
      title: 'Multiple Brands',
      description:
        'Explore products from recognized computer hardware brands, subject to availability.',
      icon: Award,
    },
    {
      title: 'Expert Assistance',
      description:
        'Get help with product selection and custom computer requirements.',
      icon: HelpCircle,
    },
    {
      title: 'Delivery Information',
      description:
        'Contact our team for delivery availability and details.',
      icon: Truck,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Our Business Strengths
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            WHY CHOOSE COMPUTER GALAXY?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Delivering hardware, prebuilt solutions, and wholesale computer components across Rajasthan and beyond.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/90 p-6 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 group-hover:border-blue-500/40 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Theme 0{idx + 1}</span>
                  <span className="text-blue-600/70 dark:text-blue-400/60 font-mono">Verified Service</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
