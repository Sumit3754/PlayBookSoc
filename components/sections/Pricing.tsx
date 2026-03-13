'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PRICING } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function Pricing() {
  const [incidents, setIncidents] = useState(2);

  const calculateCost = (tier: typeof PRICING.tiers[0], incidentCount: number) => {
    if (typeof tier.basePrice === 'string') return 'Custom';

    const baseMin = tier.basePrice.min;
    const avgBase = (tier.basePrice.min + tier.basePrice.max) / 2;

    if (!tier.incidents) return `$${avgBase.toLocaleString()}`;

    const mediumIncidents = Math.floor(incidentCount * 0.6);
    const highIncidents = Math.floor(incidentCount * 0.3);
    const criticalIncidents = Math.floor(incidentCount * 0.1);

    const incidentCost =
      mediumIncidents * tier.incidents.medium +
      highIncidents * tier.incidents.high +
      criticalIncidents * tier.incidents.critical;

    const total = avgBase + incidentCost;
    return `$${total.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{PRICING.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {PRICING.subtitle}
          </p>

          <div className="max-w-md mx-auto mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4">{PRICING.estimator.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              {PRICING.estimator.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Estimated incidents/month:</span>
                <span className="text-2xl font-bold text-blue-600">{incidents}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={incidents}
                onChange={(e) => setIncidents(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>5</span>
                <span>10+</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PRICING.tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className={tier.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  {calculateCost(tier, incidents)}
                  {typeof tier.basePrice !== 'string' && (
                    <span className="text-lg font-normal">/month</span>
                  )}
                </div>
                {typeof tier.basePrice !== 'string' && (
                  <p className={`text-sm ${tier.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    Base: ${tier.basePrice.min}-${tier.basePrice.max} + per-incident
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className={`h-5 w-5 flex-shrink-0 ${tier.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                size="lg"
                asChild
              >
                <a href="#contact">{tier.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <strong>What's a qualifying incident?</strong> {PRICING.incidentDefinition}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
