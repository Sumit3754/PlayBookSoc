export const SITE_CONFIG = {
  name: 'PlaybookSOC',
  tagline: 'AI-Native Security for SMBs',
  description: 'Pay Only for What You Fix',
  email: 'contact@playbooksoc.com',
  url: 'https://playbooksoc.com',
};

export const NAV_LINKS = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#msp', label: 'For MSPs' },
];

export const HERO = {
  headline: 'AI-Native Security for SMBs. Pay Only for What You Fix.',
  subheadline: 'Enterprise-grade SOC protection without hiring a security team. We monitor 24/7, use AI to catch real threats, and you only pay when we handle an incident.',
  ctaPrimary: 'Get Free Assessment',
  ctaSecondary: 'See How It Works',
};

export const PROBLEM = {
  title: 'SMBs Are Under Attack',
  subtitle: 'The cybersecurity reality for small and medium businesses',
  stats: [
    {
      value: 80,
      suffix: '%',
      label: 'of SMBs experienced security incidents in the past 18 months',
    },
    {
      value: 90,
      suffix: '%',
      label: 'lack dedicated security staff and rely on generic IT support',
    },
    {
      value: 0,
      prefix: '$',
      suffix: 'M',
      label: 'budget for enterprise SOC solutions that cost $1-5M annually',
    },
  ],
  description: 'Most SMBs have 1-3 IT generalists with zero security expertise, yet face the same threats as enterprises: ransomware, BEC, credential theft, and insider threats.',
};

export const SOLUTION = {
  title: 'Security Incidents Explained in Plain English',
  subtitle: 'Every incident is translated into business language you can act on—no jargon, no noise',
  features: [
    {
      title: 'What Happened',
      description: 'The event explained in plain language',
    },
    {
      title: 'Business Impact',
      description: 'Risk to revenue, data, and reputation',
    },
    {
      title: 'What We Did',
      description: 'Automated and manual actions taken',
    },
    {
      title: 'What You Should Do Next',
      description: 'Clear, actionable recommendations',
    },
  ],
};

export const DIFFERENTIATORS = [
  {
    title: 'Per-Incident Pricing',
    description: 'Transparent, outcome-based billing. Pay only when we detect, investigate, and resolve real security incidents—not for every noisy alert.',
    icon: 'DollarSign',
  },
  {
    title: 'Narrative-First Approach',
    description: 'Every incident explained in 2-3 short paragraphs for non-technical business owners, plus monthly board reports summarizing your security posture.',
    icon: 'FileText',
  },
  {
    title: 'Playbook-as-Product',
    description: 'Pre-built, tested response playbooks for the top 30 SMB attack scenarios: BEC, ransomware, credential theft, cloud misconfigurations, and more.',
    icon: 'BookOpen',
  },
  {
    title: 'Open Architecture',
    description: 'No vendor lock-in. Your logs stay in your own SIEM or affordable open-source stack. Clear APIs and export paths—migrate anytime without friction.',
    icon: 'Unlock',
  },
  {
    title: 'SMB-First Threat Intelligence',
    description: 'Detection patterns tuned for SMB attack methods and business practices, not generic enterprise rules that generate false positives.',
    icon: 'Shield',
  },
  {
    title: 'Built for MSPs',
    description: 'White-label SOC for partners. Offer your clients 24/7 monitoring without building an internal team. Revenue share and co-branded materials included.',
    icon: 'Users',
  },
];

export const HOW_IT_WORKS = {
  title: 'How It Works',
  subtitle: 'From connection to resolution in four simple steps',
  steps: [
    {
      number: 1,
      title: 'Connect',
      description: 'We integrate with your existing tools: Microsoft 365, Google Workspace, EDR platforms, firewalls, and cloud infrastructure. Setup takes less than a day.',
      icon: 'Link',
    },
    {
      number: 2,
      title: 'Monitor',
      description: '24/7 continuous monitoring with baseline rules and automated low-risk responses. AI triages thousands of signals to find what actually matters.',
      icon: 'Activity',
    },
    {
      number: 3,
      title: 'Detect',
      description: 'Our playbook library detects real threats: impossible travel, MFA bypass, lateral movement, mass file deletion, OAuth abuse, and more—with <10% false positives.',
      icon: 'AlertTriangle',
    },
    {
      number: 4,
      title: 'Notify & Resolve',
      description: 'You receive a plain-language incident report with business impact and recommended actions. Critical incidents get 24/7 response with guided remediation.',
      icon: 'CheckCircle',
    },
  ],
};

export const PRICING = {
  title: 'Simple, Transparent Pricing',
  subtitle: 'Pay only when we handle real security incidents',
  tiers: [
    {
      name: 'Essential',
      basePrice: { min: 0, max: 500 },
      description: 'Continuous monitoring, AI triage, email alerts',
      features: [
        'Baseline detection rules',
        'Automated safe responses',
        'Email incident notifications',
        'Monthly summary report',
        'Per-incident pricing',
      ],
      incidents: {
        medium: 150,
        high: 400,
        critical: 800,
      },
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Advanced',
      basePrice: { min: 1000, max: 2000 },
      description: 'Everything in Essential plus automated playbooks',
      features: [
        'Everything in Essential',
        'Automated safe playbooks',
        'Slack/Teams integration',
        'Monthly executive report',
        'Priority support',
        'Reduced per-incident pricing',
      ],
      incidents: {
        medium: 100,
        high: 300,
        critical: 600,
      },
      cta: 'Get Demo',
      popular: true,
    },
    {
      name: 'MSP Edition',
      basePrice: 'Custom',
      description: 'White-label multi-tenant SOC for partners',
      features: [
        'White-label dashboard',
        'Multi-tenant management',
        'Revenue share model',
        'Co-branded materials',
        'Partner training & support',
        'Custom pricing per client',
      ],
      cta: 'Become Partner',
      popular: false,
    },
  ],
  incidentDefinition: 'A qualifying incident is a correlated case involving real security impact, full analysis, remediation guidance, and documented report—not every noisy alert. Low-confidence alerts are handled automatically at no cost.',
  estimator: {
    title: 'Estimate Your Monthly Cost',
    description: 'Based on typical SMB incident rates by company size',
  },
};

export const CASE_STUDIES = {
  title: 'Real Incidents, Real Results',
  subtitle: 'Anonymized case studies from our customers',
  cases: [
    {
      title: 'Business Email Compromise Stopped in 15 Minutes',
      industry: '50-person Digital Agency',
      threat: 'BEC / Account Takeover',
      summary: 'Employee clicked phishing link, attacker gained O365 access and set up email forwarding rules to intercept invoices.',
      timeline: [
        {
          time: '0 min',
          event: 'Suspicious OAuth app consent detected from unusual geolocation',
        },
        {
          time: '5 min',
          event: 'AI correlation: same user created inbox rule forwarding to external domain',
        },
        {
          time: '8 min',
          event: 'Automated response: Revoked OAuth token, disabled forwarding rule, forced password reset',
        },
        {
          time: '15 min',
          event: 'Customer notified with plain-language report and recommended MFA enforcement',
        },
      ],
      outcome: 'Attack contained before any invoice fraud occurred. Customer implemented MFA for all users within 24 hours.',
      prevented: '$75,000 potential fraud loss',
    },
    {
      title: 'Ransomware Detected Before Encryption',
      industry: '120-person Healthcare Startup',
      threat: 'Ransomware / Endpoint Compromise',
      summary: 'Employee device infected via malicious download. Detected early signs of lateral movement before ransomware payload executed.',
      timeline: [
        {
          time: '0 min',
          event: 'EDR alert: Suspicious PowerShell execution with obfuscation',
        },
        {
          time: '3 min',
          event: 'Detection: Unusual SMB connections to multiple internal workstations',
        },
        {
          time: '10 min',
          event: 'Playbook triggered: Endpoint isolated, user disabled, evidence preserved',
        },
        {
          time: '20 min',
          event: 'Customer called with guided remediation steps and forensics summary',
        },
      ],
      outcome: 'Ransomware contained to single device. No data encrypted, no ransom paid. Full network scan confirmed no other compromises.',
      prevented: 'Potential 48-hour business shutdown',
    },
    {
      title: 'Account Takeover via Stolen VPN Credentials',
      industry: '80-person B2B SaaS Company',
      threat: 'Credential Theft / Impossible Travel',
      summary: 'Employee credentials stolen and used from foreign IP to access VPN and internal systems.',
      timeline: [
        {
          time: '0 min',
          event: 'Detection: VPN login from Eastern Europe 2 hours after US office login',
        },
        {
          time: '2 min',
          event: 'AI analysis: Device fingerprint mismatch, unusual ASN, access to sensitive repos',
        },
        {
          time: '5 min',
          event: 'Automated response: Killed VPN session, disabled account, alerted security team',
        },
        {
          time: '12 min',
          event: 'Customer received incident narrative with evidence and hardening recommendations',
        },
      ],
      outcome: 'Unauthorized access terminated within minutes. Customer rolled credentials, enforced hardware MFA for VPN, and reviewed access logs.',
      prevented: 'Potential data exfiltration and IP theft',
    },
  ],
};

export const MSP_SECTION = {
  title: 'White-Label SOC for MSPs',
  subtitle: 'Offer your clients enterprise-grade security without building a team',
  benefits: [
    {
      title: 'Fast Time to Market',
      description: 'Launch SOC services in days, not months. We handle detection, triage, and response—you keep the customer relationship.',
      icon: 'Zap',
    },
    {
      title: 'Revenue Share Model',
      description: 'Wholesale pricing or revenue share. Co-branded materials and joint pilot bundles to sell to existing customers.',
      icon: 'TrendingUp',
    },
    {
      title: 'No Vendor Lock-In',
      description: 'Open architecture means your clients can migrate data anytime. Build trust by offering portability from day one.',
      icon: 'Unlock',
    },
    {
      title: 'Training & Support',
      description: 'Quarterly business reviews, technical training for your team, and dedicated partner support.',
      icon: 'GraduationCap',
    },
  ],
  cta: {
    title: 'Become a Partner',
    description: 'Join our MSP partner program and start offering white-label SOC services to your clients.',
    button: 'Apply Now',
  },
};

export const FINAL_CTA = {
  title: 'Get Your Free Security Assessment',
  subtitle: 'See what threats we can detect in your environment - no commitment required',
  description: 'We will review your current setup (tools, past incidents, gaps) and show you how PlaybookSOC can protect your business with transparent per-incident pricing.',
  features: [
    '30-minute consultation',
    'Security posture review',
    'Custom pricing estimate',
    'No sales pressure',
  ],
  button: 'Schedule Assessment',
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} PlaybookSOC. All rights reserved.`,
  tagline: 'Securing the digital future, one incident at a time.',
  email: 'contact@playbooksoc.com',
};
