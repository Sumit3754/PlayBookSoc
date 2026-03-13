'use client';

import { motion } from 'framer-motion';
import { FINAL_CTA } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{FINAL_CTA.title}</h2>
              <p className="text-xl text-blue-100 mb-6">
                {FINAL_CTA.subtitle}
              </p>
              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
                {FINAL_CTA.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {FINAL_CTA.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 group w-full sm:w-auto"
                asChild
              >
                <a href="mailto:contact@playbooksoc.com">
                  {FINAL_CTA.button}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
                asChild
              >
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
