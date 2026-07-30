import type { SiteContent } from './types';

const en = {
  htmlLang: 'en',
  assetBase: '',
  hostRedirect: true,

  seo: {
    title: 'KipIntel — Autonomous Poultry Monitoring',
    description:
      'An AI powered camera system for healthier, optimally managed poultry flocks. Feather quality scoring and poultry mite monitoring.',
    canonical: 'https://www.kipintel.com/',
    hreflangs: [
      { hreflang: 'en', href: 'https://www.kipintel.com/' },
      { hreflang: 'nl', href: 'https://www.kipintel.nl/' },
      { hreflang: 'x-default', href: 'https://www.kipintel.com/' },
    ],
    ogLocale: 'en_GB',
    ogLocaleAlternate: 'nl_NL',
    ogUrl: 'https://www.kipintel.com/',
    ogTitle: 'KipIntel — Autonomous Poultry Monitoring',
    ogDescription:
      'An AI powered camera system for healthier, optimally managed poultry flocks. Feather quality scoring and poultry mite monitoring.',
    ogImage: 'https://www.kipintel.com/og-image.png',
    ogImageAlt: 'KipIntel — Autonomous Poultry Monitoring',
    twitterTitle: 'KipIntel — Autonomous Poultry Monitoring',
    twitterDescription:
      'An AI powered camera system for healthier, optimally managed poultry flocks. Feather quality scoring and poultry mite monitoring.',
    twitterImage: 'https://www.kipintel.com/og-image.png',
    twitterImageAlt: 'KipIntel — Autonomous Poultry Monitoring',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.kipintel.com/#organization',
          name: 'KipIntel',
          url: 'https://www.kipintel.com/',
          logo: 'https://www.kipintel.com/icon-512.png',
          image: 'https://www.kipintel.com/og-image.png',
          description:
            'An AI powered camera system for healthier, optimally managed poultry flocks.',
          email: 'info@kipintel.nl',
          sameAs: ['https://www.linkedin.com/company/kipintel'],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.kipintel.com/#website',
          name: 'KipIntel',
          url: 'https://www.kipintel.com/',
          inLanguage: 'en',
          publisher: { '@id': 'https://www.kipintel.com/#organization' },
        },
        {
          '@type': 'Service',
          name: 'Feather Quality Scoring',
          serviceType: 'Poultry welfare monitoring',
          provider: { '@id': 'https://www.kipintel.com/#organization' },
          description:
            'Daily, per-bird feather condition scoring from camera footage to detect stress and deterioration early.',
        },
        {
          '@type': 'Service',
          name: 'Poultry Mite Detection',
          serviceType: 'Poultry health monitoring',
          provider: { '@id': 'https://www.kipintel.com/#organization' },
          description:
            'Analysis of night-time flock activity to detect poultry red mite infestations early.',
        },
      ],
    },
  },

  header: {
    logoAriaLabel: 'KipIntel home',
    navAriaLabel: 'Main navigation',
    navLinks: [
      { href: '#products', label: 'Our Software' },
      { href: '#team', label: 'Team' },
      { href: '#contact', label: 'Contact' },
    ],
    langToggle: {
      href: 'https://www.kipintel.nl',
      label: 'NL',
      flag: 'nl',
      title: 'Bekijk de Nederlandse versie',
    },
    hamburgerAriaLabel: 'Open menu',
  },

  mobileNav: {
    ariaLabel: 'Mobile navigation',
    links: [
      { href: '#products', label: 'Our Software' },
      { href: '#team', label: 'Team' },
      { href: '#contact', label: 'Contact' },
    ],
    langToggle: {
      href: 'https://www.kipintel.nl',
      label: 'Switch to Dutch',
      flag: 'nl',
    },
  },

  hero: {
    img: {
      stem: 'hero2',
      alt: 'Poultry farm monitored by KipIntel',
      width: 1224,
      height: 1048,
    },
    badge: 'AgriTech · AI Vision',
    titleHtml: 'Autonomous Poultry<br>Monitoring',
    subtitle: 'Intelligent camera systems for healthier flocks and optimal management.',
    ctaPrimary: { href: '#contact', label: 'Get in touch' },
    ctaSecondary: { href: '#products', label: 'See our software' },
  },

  products: {
    label: 'Products',
    title: 'Our Software',
    desc: "Providing clear insights into your flock's health and behaviour every day. Powered by AI and developed together with poultry farmers, veterinarians and industry experts.",
    cards: [
      {
        href: '#feather-scoring',
        icon: 'feather',
        title: 'Feather Quality Scoring',
        desc: 'A daily overview of the feather condition of your birds. Identify signs of stress and other issues early for quick and effective management.',
        linkLabel: 'Read more →',
      },
      {
        href: '#mite-monitoring',
        icon: 'moon',
        title: 'Poultry Mite Detection',
        desc: 'Analysis of the night activity of the hens for signs of poultry red mite. Detect infestations early before they can affect the wellbeing and performance of your flock.',
        linkLabel: 'Read more →',
      },
    ],
  },

  showcases: [
    {
      id: 'feather-scoring',
      sectionAlt: true,
      reverse: false,
      img: {
        stem: 'detections',
        alt: 'Feather quality scoring dashboard',
        width: 1200,
        height: 892,
      },
      number: '01',
      title: 'Feather Quality Scoring',
      desc: 'Our camera system continuously scores feather condition across the flock, replacing infrequent manual inspections with daily objective measurements. Detect deterioration early, optimize your feeding strategy and management for optimal longevity.',
      features: [
        'Per-bird scoring, updated continuously throughout the day',
        'Trend detection over time, revealing deterioration at an early stage',
        'Year-on-year comparison to track improvement and learn from your data',
        'Fully autonomous assessment',
      ],
    },
    {
      id: 'mite-monitoring',
      sectionAlt: false,
      reverse: true,
      img: {
        stem: 'heatmap-night-activity',
        alt: 'Night activity heatmap for mite monitoring',
        width: 1200,
        height: 767,
      },
      number: '02',
      title: 'Poultry Mite Detection',
      desc: 'Poultry mites are only active at night, making them notoriously hard to detect before the infestation has serious impact on the health of your flock. Our system processes bird activity patterns during dark hours, identifying restless behavior that indicates mite presence days or weeks earlier.',
      features: [
        'Analysis of flock behavior using night mode cameras',
        'Early warning alerts based on activity anomalies',
        'More accurately plan and execute treatments for maximal effect',
        'Support undisturbed rest and help your flock stay in top condition',
      ],
    },
  ],

  developments: {
    label: 'Developments',
    title: "What We're Exploring",
    desc: 'Alongside our products, we continuously investigate new ways to extract value from camera footage.',
    badge: 'Exploring',
    cards: [
      {
        icon: 'shield',
        title: 'Comb colour analysis',
        desc: 'Camera-based scoring of comb colour as a real-time health indicator. The colour of the comb is a highly informative signal for optimising the health of the hens.',
      },
      {
        icon: 'boxPlus',
        title: 'Behaviour at supplements',
        desc: 'Tracking feeding behaviour at luzerne bales and pecking stones. Changes in usage patterns reveal potential disbalances or health issues.',
      },
      {
        icon: 'person',
        title: 'Detecting smothering',
        desc: 'Identifying piling behaviour of the flock. Learn where, when and how this occurs for future prevention.',
      },
      {
        icon: 'target',
        title: 'Rooster management',
        desc: 'Insights in rooster activity and mating behaviour. Optimize management decisions for a balanced flock.',
      },
      {
        icon: 'waveform',
        title: 'Sound analysis',
        desc: 'Listening to the flock through barn audio to surface health and welfare signals. Coughing, distress calls and shifts in ambient noise can reveal issues before they are visible.',
      },
    ],
  },

  howItWorks: {
    label: 'Process',
    title: 'How It Works',
    desc: 'From installation to insights in three straightforward steps.',
    steps: [
      {
        number: '01',
        title: 'Setup',
        desc: 'Plug and play camera installation in your barn. No construction work, no complex wiring. Up and running within a day.',
      },
      {
        number: '02',
        title: 'Monitor',
        desc: 'Your video feed is processed around the clock by our algorithms, turning raw footage into clear insights and visualisations.',
      },
      {
        number: '03',
        title: 'Act',
        desc: 'A real-time dashboard and quick alerts give you the information to intervene early, fine-tune your response and keep your flock thriving.',
      },
    ],
  },

  team: {
    label: 'Team',
    title: 'The People Behind KipIntel',
    desc: 'A team combining expertise in AI, computer vision, and agricultural science.',
    members: [
      {
        img: {
          stem: 'profile-joost-scholten',
          alt: 'Joost Scholten',
          width: 640,
          height: 604,
        },
        name: 'Joost Scholten',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/joostscholten99/',
      },
      {
        img: {
          stem: 'profile-naftali-slob',
          alt: 'Naftali Slob',
          width: 640,
          height: 640,
        },
        name: 'Naftali Slob',
        role: 'Co-founder',
        linkedin: 'https://www.linkedin.com/in/naftali-slob-445634160/',
      },
    ],
  },

  contact: {
    title: 'Let’s talk',
    desc: 'Curious about our technology, interested in a pilot, or just want to get to know us? We would love to hear from you.',
    email: 'info@kipintel.nl',
    formAction: 'https://formspree.io/f/xdaylnvj',
    nameField: { id: 'name-en', label: 'Name', placeholder: 'Your name' },
    emailField: { id: 'email-en', label: 'Email', placeholder: 'your@email.com' },
    messageField: {
      id: 'message-en',
      label: 'Message',
      placeholder: 'Tell us about your farm, project, or question...',
    },
    submitLabel: 'Send message',
  },

  footer: {
    logoAriaLabel: 'KipIntel home',
    navAriaLabel: 'Footer navigation',
    links: [
      { href: '#products', label: 'Our Software' },
      { href: '#team', label: 'Team' },
      { href: '#contact', label: 'Contact' },
    ],
    langToggle: {
      href: 'https://www.kipintel.nl',
      label: 'NL',
      flag: 'nl',
      title: 'Nederlandse versie',
    },
    linkedin: {
      href: 'https://www.linkedin.com/company/kipintel',
      title: 'KipIntel on LinkedIn',
    },
    copyright: '© 2025 KipIntel',
  },
} satisfies SiteContent;

export default en;
