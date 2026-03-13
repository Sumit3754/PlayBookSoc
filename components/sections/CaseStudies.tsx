'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CASE_STUDIES } from '@/lib/constants';
import { ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CaseStudies() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{CASE_STUDIES.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {CASE_STUDIES.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {CASE_STUDIES.cases.map((caseStudy, index) => {
            const isExpanded = expandedCase === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedCase(isExpanded ? null : index)}
                  className="w-full p-8 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                          {caseStudy.threat}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {caseStudy.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {caseStudy.summary}
                      </p>
                    </div>
                    <div className="ml-4">
                      {isExpanded ? (
                        <ChevronUp className="h-6 w-6 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t border-gray-200 dark:border-gray-600 pt-6 space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-4 flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                            Incident Timeline
                          </h4>
                          <div className="space-y-4">
                            {caseStudy.timeline.map((item, idx) => (
                              <div key={idx} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-20 text-sm font-bold text-blue-600">
                                  {item.time}
                                </div>
                                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {item.event}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                            <h4 className="font-semibold text-lg mb-2 text-green-700 dark:text-green-400">
                              Outcome
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {caseStudy.outcome}
                            </p>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                            <h4 className="font-semibold text-lg mb-2 text-blue-700 dark:text-blue-400">
                              Value Delivered
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {caseStudy.prevented}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
