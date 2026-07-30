import type { IconName, FlagName } from './types';

// Inline SVG markup, byte-identical to the original hand-written pages.

export const cardIcons: Record<IconName, string> = {
  feather: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                <line x1="16" y1="8" x2="2" y2="22"/>
                <line x1="17.5" y1="15" x2="9" y2="15"/>
              </svg>`,
  moon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>`,
  shield: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>`,
  boxPlus: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 3h18v18H3z" rx="2"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>`,
  person: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4"/>
                <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
                <path d="M4 17c1-2 4-3 8-3s7 1 8 3"/>
              </svg>`,
  target: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="12" cy="12" r="1" fill="currentColor"/>
              </svg>`,
  waveform: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="3" y1="10" x2="3" y2="14"/>
                <line x1="7.5" y1="6" x2="7.5" y2="18"/>
                <line x1="12" y1="3" x2="12" y2="21"/>
                <line x1="16.5" y1="6" x2="16.5" y2="18"/>
                <line x1="21" y1="10" x2="21" y2="14"/>
              </svg>`,
};

export const flagIcons: Record<FlagName, string> = {
  nl: `<svg class="lang-toggle__flag" viewBox="0 0 9 6" aria-hidden="true"><rect width="9" height="2" fill="#ae1c28"/><rect width="9" height="2" y="2" fill="#fff"/><rect width="9" height="2" y="4" fill="#21468b"/></svg>`,
  uk: `<svg class="lang-toggle__flag" viewBox="0 0 60 36" aria-hidden="true"><rect width="60" height="36" fill="#012169"/><path d="M0,0 L60,36 M0,36 L60,0" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,36 M0,36 L60,0" stroke="#C8102E" stroke-width="2"/><path d="M30,0 v36 M0,18 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v36 M0,18 h60" stroke="#C8102E" stroke-width="6"/></svg>`,
};

export const linkedinIcon = (size: number) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;

export const mailIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>`;
