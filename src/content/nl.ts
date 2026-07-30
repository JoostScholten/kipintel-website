import type { SiteContent } from './types';

const nl = {
  htmlLang: 'nl',
  assetBase: '../',
  hostRedirect: false,

  seo: {
    title: 'KipIntel — Autonome pluimvee monitoring',
    description:
      'Door AI gedreven bewakingssystemen voor gezonder en optimaal gemanaged pluimvee. Verendek kwaliteitsscore en vogelmijt monitoring.',
    canonical: 'https://www.kipintel.nl/',
    hreflangs: [
      { hreflang: 'nl', href: 'https://www.kipintel.nl/' },
      { hreflang: 'en', href: 'https://www.kipintel.com/' },
      { hreflang: 'x-default', href: 'https://www.kipintel.com/' },
    ],
    ogLocale: 'nl_NL',
    ogLocaleAlternate: 'en_GB',
    ogUrl: 'https://www.kipintel.nl/',
    ogTitle: 'KipIntel — Autonome pluimvee monitoring',
    ogDescription:
      'Door AI gedreven bewakingssystemen voor gezonder en optimaal gemanaged pluimvee. Verendek kwaliteitsscore en vogelmijt monitoring.',
    ogImage: 'https://www.kipintel.nl/og-image.png',
    ogImageAlt: 'KipIntel — Autonome pluimvee monitoring',
    twitterTitle: 'KipIntel — Autonome pluimvee monitoring',
    twitterDescription:
      'Door AI gedreven bewakingssystemen voor gezonder en optimaal gemanaged pluimvee. Verendek kwaliteitsscore en vogelmijt monitoring.',
    twitterImage: 'https://www.kipintel.nl/og-image.png',
    twitterImageAlt: 'KipIntel — Autonome pluimvee monitoring',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.kipintel.nl/#organization',
          name: 'KipIntel',
          url: 'https://www.kipintel.nl/',
          logo: 'https://www.kipintel.nl/icon-512.png',
          image: 'https://www.kipintel.nl/og-image.png',
          description:
            'Door AI gedreven bewakingssystemen voor gezonder en optimaal gemanaged pluimvee.',
          email: 'info@kipintel.nl',
          sameAs: ['https://www.linkedin.com/company/kipintel'],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.kipintel.nl/#website',
          name: 'KipIntel',
          url: 'https://www.kipintel.nl/',
          inLanguage: 'nl',
          publisher: { '@id': 'https://www.kipintel.nl/#organization' },
        },
        {
          '@type': 'Service',
          name: 'Verendek kwaliteitsscore',
          serviceType: 'Pluimvee welzijnsmonitoring',
          provider: { '@id': 'https://www.kipintel.nl/#organization' },
          description:
            'Dagelijkse verenscore per hen op basis van camerabeelden om stress en verslechtering vroegtijdig te detecteren.',
        },
        {
          '@type': 'Service',
          name: 'Vogelmijt detectie',
          serviceType: 'Pluimvee gezondheidsmonitoring',
          provider: { '@id': 'https://www.kipintel.nl/#organization' },
          description:
            'Analyse van nachtelijke activiteit van het koppel om besmettingen met rode vogelmijt vroegtijdig te detecteren.',
        },
      ],
    },
  },

  header: {
    logoAriaLabel: 'KipIntel startpagina',
    navAriaLabel: 'Hoofdnavigatie',
    navLinks: [
      { href: '#products', label: 'Onze Software' },
      { href: '#team', label: 'Team' },
      { href: '#contact', label: 'Contact' },
    ],
    langToggle: {
      href: 'https://www.kipintel.com',
      label: 'EN',
      flag: 'uk',
      title: 'View the English version',
    },
    hamburgerAriaLabel: 'Menu openen',
  },

  mobileNav: {
    ariaLabel: 'Mobiele navigatie',
    links: [
      { href: '#products', label: 'Onze Software' },
      { href: '#team', label: 'Team' },
      { href: '#contact', label: 'Contact' },
    ],
    langToggle: {
      href: 'https://www.kipintel.com',
      label: 'Switch to English',
      flag: 'uk',
    },
  },

  hero: {
    img: {
      stem: 'hero2',
      alt: 'Pluimveestal gemonitord door KipIntel',
      width: 1224,
      height: 1048,
    },
    badge: 'AgriTech · AI Vision',
    titleHtml: 'Autonome pluimvee monitoring',
    subtitle: 'Intelligente camerasystemen voor gezondere koppels en optimaal management.',
    ctaPrimary: { href: '#contact', label: 'Neem contact op' },
    ctaSecondary: { href: '#products', label: 'Bekijk onze software' },
  },

  products: {
    label: 'Producten',
    title: 'Onze Software',
    desc: 'Dagelijks helder inzicht in de gezondheid en het gedrag van uw koppel. Ondersteund door AI en ontwikkeld samen met pluimveehouders, pluimveeartsen en experts binnen de sector.',
    cards: [
      {
        href: '#feather-scoring',
        icon: 'feather',
        title: 'Verendek kwaliteitsscore',
        desc: 'Een dagelijks overzicht van de verendek kwaliteit van uw hennen. Identificeer tekenen van stress en andere problemen vroegtijdig voor snel en effectief management.',
        linkLabel: 'Meer informatie →',
      },
      {
        href: '#mite-monitoring',
        icon: 'moon',
        title: 'Vogelmijt detectie',
        desc: 'Een analyse van de nachtactiviteit van de hennen voor tekenen van rode vogelmijt. Detecteer besmettingen vroegtijdig voordat ze het welzijn en de conditie van uw koppel kunnen aantasten.',
        linkLabel: 'Meer informatie →',
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
        alt: 'Dashboard verendek kwaliteitsscore',
        width: 1200,
        height: 892,
      },
      number: '01',
      title: 'Verendek kwaliteitsscore',
      desc: 'Ons camerasysteem scoort continu de kwaliteit van het verendek van het koppel, en vervangt daarmee infrequente handmatige inspecties door dagelijkse objectieve metingen. Detecteer verslechtering vroegtijdig, optimaliseer uw voerstrategie en management voor een optimale levensduur.',
      features: [
        'Verenscore per hen, continu bijgewerkt gedurende de dag',
        'Trenddetectie over tijd, met vroegtijdige signalering van verslechtering',
        'Vergelijk met eerdere jaren om keer op keer verbeteringen door te voeren en te leren van uw data',
        'Volledig autonome beoordelingen',
      ],
    },
    {
      id: 'mite-monitoring',
      sectionAlt: false,
      reverse: true,
      img: {
        stem: 'heatmap-night-activity',
        alt: 'Nachtelijke activiteitsheatmap voor vogelmijt monitoring',
        width: 1200,
        height: 767,
      },
      number: '02',
      title: 'Vogelmijt detectie',
      desc: "Vogelmijten zijn voornamelijk 's nachts actief, waardoor ze moeilijk te detecteren zijn voordat de besmetting ernstige gevolgen heeft voor de gezondheid van uw koppel. Het systeem verwerkt activiteitspatronen van de hennen gedurende de nacht en detecteert onrust dat wijst op de aanwezigheid van mijten.",
      features: [
        'Analyse van de activiteit van de hennen doormiddel van een nachtcamera',
        'Vroegtijdige waarschuwingen op basis van gedragsafwijkingen',
        'Plan en voer behandelingen nauwkeuriger uit voor maximaal effect',
        'Ondersteun ongestoorde nachtrust en houd uw koppel in optimale conditie',
      ],
    },
  ],

  developments: {
    label: 'Ontwikkelingen',
    title: 'Wat We Onderzoeken',
    desc: 'Naast onze producten onderzoeken we voortdurend nieuwe manieren om waarde te halen uit camerabeelden.',
    badge: 'Verkenning',
    cards: [
      {
        icon: 'shield',
        title: 'Analyse van kamkleur',
        desc: 'Een beoordeling van de kleur van de kam als realtime gezondheidsindicator.',
      },
      {
        icon: 'boxPlus',
        title: 'Gedrag bij voersupplementen',
        desc: 'Monitoren van het eetgedrag bij luzernebalen en pikstenen. Veranderingen in gebruikspatronen wijzen op mogelijke onbalans of gezondheidsproblemen.',
      },
      {
        icon: 'person',
        title: 'Detecteren van troepen',
        desc: 'Het identificeren van verdrukkingen binnen het koppel. Door te weten waar, wanneer en hoe dit gebeurt, kan dit in de toekomst beter worden voorkomen.',
      },
      {
        icon: 'target',
        title: 'Management van hanen',
        desc: 'Inzicht in hanenactiviteit en paringsgedrag. Optimaliseer managementbeslissingen voor een gebalanceerd koppel.',
      },
      {
        icon: 'waveform',
        title: 'Geluidsanalyse',
        desc: 'Luisteren naar het koppel via geluid in de stal om gezondheids- en welzijnssignalen op te vangen. Hoesten, alarmkreten en veranderingen in omgevingsgeluid kunnen problemen onthullen voordat ze zichtbaar zijn.',
      },
    ],
  },

  howItWorks: {
    label: 'Werkwijze',
    title: 'Hoe Het Werkt',
    desc: 'Van installatie tot inzicht in drie eenvoudige stappen.',
    steps: [
      {
        number: '01',
        title: 'Installeren',
        desc: 'Plug and play camera installatie in uw stal. Geen bouwwerkzaamheden, geen complexe bedrading. Binnen een dag operationeel.',
      },
      {
        number: '02',
        title: 'Monitoren',
        desc: 'Uw camerabeelden worden continu verwerkt door onze algoritmes om ruwe data om te zetten in heldere inzichten en visualisaties.',
      },
      {
        number: '03',
        title: 'Handelen',
        desc: 'Een realtime dashboard en snelle meldingen geven u de informatie om vroegtijdig in te grijpen, bij te sturen en uw koppel in topvorm te houden.',
      },
    ],
  },

  team: {
    label: 'Team',
    title: 'De Mensen Achter KipIntel',
    desc: 'Een team dat expertise combineert op het gebied van AI, computer vision en landbouwwetenschappen.',
    members: [
      {
        img: {
          stem: 'profile-joost-scholten',
          alt: 'Joost Scholten',
          width: 640,
          height: 604,
        },
        name: 'Joost Scholten',
        role: 'Oprichter',
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
        role: 'Mede-oprichter',
        linkedin: 'https://www.linkedin.com/in/naftali-slob-445634160/',
      },
    ],
  },

  contact: {
    title: 'Laten we praten',
    desc: 'Nieuwsgierig naar onze technologie, interesse in een pilot, of gewoon even kennismaken? We horen graag van u.',
    email: 'info@kipintel.nl',
    formAction: 'https://formspree.io/f/xdaylnvj',
    hiddenLanguage: 'nl',
    nameField: { id: 'name-nl', label: 'Naam', placeholder: 'Uw naam' },
    emailField: { id: 'email-nl', label: 'E-mail', placeholder: 'uw@email.nl' },
    messageField: {
      id: 'message-nl',
      label: 'Bericht',
      placeholder: 'Vertel ons over uw bedrijf, project of vraag...',
    },
    submitLabel: 'Verstuur bericht',
  },

  footer: {
    logoAriaLabel: 'KipIntel startpagina',
    navAriaLabel: 'Footernavigatie',
    links: [
      { href: '#products', label: 'Onze Software' },
      { href: '#team', label: 'Team' },
      { href: '#contact', label: 'Contact' },
    ],
    langToggle: {
      href: 'https://www.kipintel.com',
      label: 'EN',
      flag: 'uk',
      title: 'English version',
    },
    linkedin: {
      href: 'https://www.linkedin.com/company/kipintel',
      title: 'KipIntel op LinkedIn',
    },
    copyright: '© 2025 KipIntel',
  },
} satisfies SiteContent;

export default nl;
