'use client';

import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '@/lib/constants';
import { getIcon } from '@/lib/icons';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{HOW_IT_WORKS.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {HOW_IT_WORKS.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {HOW_IT_WORKS.steps.map((step, index) => {
            const Icon = getIcon(step.icon);
            const isLast = index === HOW_IT_WORKS.steps.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start space-x-6 mb-12">
                  <div className="flex-shrink-0 relative">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-xl shadow-lg z-10 relative">
                      {step.number}
                    </div>
                    {!isLast && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-30" />
                    )}
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-600">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
