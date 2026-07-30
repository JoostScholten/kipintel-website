# Astro migration — working branch

Branch: `astro-migration`. Production (`main`) is untouched.

## ⚠️ This branch's `vercel.json` carries a preview-only rule

```json
{ "source": "/(.*)", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
```

It keeps the preview deployment out of search results. **The cutover PR must remove
this rule**, and nothing else in the headers block. Vercel only applies `noindex`
automatically to `*.vercel.app` URLs — a custom preview subdomain would otherwise be
indexable, which is why the rule is explicit.

Verify after each preview deploy:

```sh
curl -sI https://<preview-domain>/          | grep -i x-robots-tag   # expect noindex
curl -sI https://<preview-domain>/nl/       | grep -i x-robots-tag   # expect noindex
curl -sI https://www.kipintel.com/          | grep -ic x-robots-tag  # expect 0
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/content/types.ts` | `SiteContent` interface — the lockstep contract |
| `src/content/en.ts`, `nl.ts` | Locale dictionaries, each `satisfies SiteContent` |
| `src/content/icons.ts` | Inline SVG markup shared by both locales |
| `src/layouts/Layout.astro` | The entire `<head>`, driven by `t.seo` |
| `src/components/PageBody.astro` | The one page composition, shared by both locales |
| `src/pages/index.astro` | EN → `dist/index.html` |
| `src/pages/nl/index.astro` | NL → `dist/nl/index.html` |
| `public/` | Byte-for-byte passthrough: assets, favicons, robots, sitemap, manifest |

EN and NL cannot drift structurally: there is one set of components and one page
composition. Adding a field to `SiteContent` fails `astro build` until *both*
dictionaries provide it.

## Deliberate constraints

- No adapter, no Astro i18n routing — output paths match the old site exactly, so the
  existing host-based rewrite in `vercel.json` keeps serving NL at the `.nl` root.
- `compressHTML: false` while parity diffing.
- `is:inline` on the head redirect script and `main.js` so they keep their original
  synchronous, non-bundled semantics.
- All CSS/JS/images stay in `public/` for the parity phase, preserving current URLs
  (including the `?v=2` on the stylesheet). Design-phase assets can move into `src/`
  later to gain hashed `/_astro/` URLs, which the immutable cache rule already covers.
- No `<meta name="generator">` — it would be a new tag versus production.

## Verification

```sh
npm run build
python3 scripts/parity.py     # normalized DOM diff vs the pre-migration HTML
```

Form delivery could not be verified from the build container (its egress proxy blocks
`formspree.io`). Verify manually with a real submission, or:

```sh
curl -X POST -H "Accept: application/json" \
  -F "name=test" -F "email=you@example.com" -F "message=migration test" \
  https://formspree.io/f/xdaylnvj
```
