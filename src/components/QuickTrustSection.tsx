import React from 'react';
import { Cpu, Wrench, Layers, Truck } from 'lucide-react';

export const QuickTrustSection: React.FC = () => {
  const benefits = [
    {
      title: 'Computer Hardware & Accessories',
      subtitle: 'Processors, GPUs, motherboards, storage & peripherals',
      icon: Cpu,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40',
    },
    {
      title: 'Custom PC Solutions',
      subtitle: 'Tailored gaming, video editing & office setups',
      icon: Wrench,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40',
    },
    {
      title: 'Wholesale & Retail',
      subtitle: 'Serving individual buyers & bulk institutional orders',
      icon: Layers,
      color: 'text-sky-600 dark:text-sky-400',
      bgColor: 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800/40',
    },
    {
      title: 'Delivery Across India',
      subtitle: 'Contact store to confirm shipping coverage & timelines',
      icon: Truck,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
    },
  ];

  return (
    <section className="border-y border-slate-200 dark:border-slate-800/80 bg-slate-100/80 dark:bg-slate-900/60 py-6 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${item.bgColor}`}
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
