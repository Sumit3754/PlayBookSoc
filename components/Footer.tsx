'use client';

import Link from 'next/link';
import { FOOTER, SITE_CONFIG } from '@/lib/constants';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-gray-400 text-sm">
              {FOOTER.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problem" className="text-gray-400 hover:text-white transition-colors">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-white transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <a
              href={`mailto:${FOOTER.email}`}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="h-4 w-4" />
              <span>{FOOTER.email}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
