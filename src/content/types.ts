// Single source of truth for the shape of a locale's content.
// en.ts and nl.ts must both `satisfies SiteContent`, so adding a field here
// fails `astro check` until BOTH locales provide it — EN/NL lockstep by construction.

export type IconName =
  | 'feather'
  | 'moon'
  | 'shield'
  | 'boxPlus'
  | 'person'
  | 'target'
  | 'waveform';

export type FlagName = 'nl' | 'uk';

export interface ImageRef {
  /** filename stem inside assets/images/ — rendered as <picture> webp + jpg fallback */
  stem: string;
  alt: string;
  width: number;
  height: number;
}

export interface LinkRef {
  href: string;
  label: string;
}

export interface LangToggle {
  href: string;
  label: string;
  flag: FlagName;
  title?: string;
}

export interface SiteContent {
  htmlLang: string;
  /** relative prefix from the page to the repo root ('' for /, '../' for /nl/) */
  assetBase: '' | '../';
  /** EN page carries the inline kipintel.nl -> /nl/ hostname redirect fallback */
  hostRedirect: boolean;

  seo: {
    title: string;
    description: string;
    canonical: string;
    /** rendered in order — per-locale ordering preserved from the original pages */
    hreflangs: { hreflang: string; href: string }[];
    ogLocale: string;
    ogLocaleAlternate: string;
    ogUrl: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogImageAlt: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    twitterImageAlt: string;
    jsonLd: Record<string, unknown>;
  };

  header: {
    logoAriaLabel: string;
    navAriaLabel: string;
    navLinks: LinkRef[];
    langToggle: LangToggle;
    hamburgerAriaLabel: string;
  };

  mobileNav: {
    ariaLabel: string;
    links: LinkRef[];
    langToggle: LangToggle;
  };

  hero: {
    img: ImageRef;
    badge: string;
    /** may contain markup (EN uses a <br>) */
    titleHtml: string;
    subtitle: string;
    ctaPrimary: LinkRef;
    ctaSecondary: LinkRef;
  };

  products: {
    label: string;
    title: string;
    desc: string;
    cards: {
      href: string;
      icon: IconName;
      title: string;
      desc: string;
      linkLabel: string;
    }[];
  };

  showcases: {
    id: string;
    sectionAlt: boolean;
    reverse: boolean;
    img: ImageRef;
    number: string;
    title: string;
    desc: string;
    features: string[];
  }[];

  developments: {
    label: string;
    title: string;
    desc: string;
    badge: string;
    cards: {
      icon: IconName;
      title: string;
      desc: string;
    }[];
  };

  howItWorks: {
    label: string;
    title: string;
    desc: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };

  team: {
    label: string;
    title: string;
    desc: string;
    members: {
      img: ImageRef;
      name: string;
      role: string;
      linkedin: string;
    }[];
  };

  contact: {
    title: string;
    desc: string;
    email: string;
    formAction: string;
    /** NL renders <input type="hidden" name="_language" value="..."> */
    hiddenLanguage?: string;
    nameField: { id: string; label: string; placeholder: string };
    emailField: { id: string; label: string; placeholder: string };
    messageField: { id: string; label: string; placeholder: string };
    submitLabel: string;
  };

  footer: {
    logoAriaLabel: string;
    navAriaLabel: string;
    links: LinkRef[];
    langToggle: LangToggle;
    linkedin: { href: string; title: string };
    copyright: string;
  };
}
