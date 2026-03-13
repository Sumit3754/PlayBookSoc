'use client';

import { motion } from 'framer-motion';
import { MSP_SECTION } from '@/lib/constants';
import { getIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function MSP() {
  return (
    <section id="msp" className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{MSP_SECTION.title}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {MSP_SECTION.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {MSP_SECTION.benefits.map((benefit, index) => {
            const Icon = getIcon(benefit.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <Icon className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-4">{MSP_SECTION.cta.title}</h3>
          <p className="text-xl text-blue-100 mb-8">
            {MSP_SECTION.cta.description}
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 group"
            asChild
          >
            <a href="#contact">
              {MSP_SECTION.cta.button}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
