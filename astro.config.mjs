import { defineConfig } from 'astro/config';

// compressHTML off so built output stays diffable against the previous
// hand-written HTML during the migration parity checks.
export default defineConfig({
  compressHTML: false,
});
