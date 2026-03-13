'use client';

import { motion } from 'framer-motion';
import { SOLUTION } from '@/lib/constants';
import { CircleCheck as CheckCircle } from 'lucide-react';

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{SOLUTION.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {SOLUTION.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-600">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 mb-4 shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                    <div>
                      <p className="font-semibold text-sm mb-1">CRITICAL ALERT</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Impossible travel detected: Login from Tokyo 2 hours after New York access
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                      AI ANALYSIS SUMMARY
                    </p>
                    <p className="text-sm leading-relaxed">
                      <strong>What Happened:</strong> Employee account accessed from Japan
                      shortly after US login. Device fingerprint mismatch detected.
                    </p>
                    <p className="text-sm leading-relaxed mt-2">
                      <strong>Business Impact:</strong> Potential account compromise with
                      access to customer data and financial systems.
                    </p>
                    <p className="text-sm leading-relaxed mt-2">
                      <strong>Actions Taken:</strong> Session terminated, account disabled,
                      user notified.
                    </p>
                    <p className="text-sm leading-relaxed mt-2">
                      <strong>Recommended:</strong> Reset password, enable MFA, review
                      access logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {SOLUTION.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
