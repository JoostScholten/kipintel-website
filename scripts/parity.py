#!/usr/bin/env python3
"""Normalized DOM diff: built Astro output vs original hand-written HTML."""
import sys, re, html
from html.parser import HTMLParser

VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}

class Tok(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.toks = []
    def handle_starttag(self, tag, attrs):
        a = sorted((k, (v if v is not None else '')) for k, v in attrs)
        self.toks.append(('start', tag, tuple(a)))
    def handle_startendtag(self, tag, attrs):
        a = sorted((k, (v if v is not None else '')) for k, v in attrs)
        self.toks.append(('start', tag, tuple(a)))
        if tag not in VOID:
            self.toks.append(('end', tag, ()))
    def handle_endtag(self, tag):
        if tag not in VOID:
            self.toks.append(('end', tag, ()))
    def handle_data(self, data):
        t = re.sub(r'\s+', ' ', data).strip()
        if t:
            self.toks.append(('text', t, ()))

def toks(path):
    p = Tok()
    p.feed(open(path, encoding='utf-8').read())
    return p.toks

def fmt(t):
    kind, name, attrs = t
    if kind == 'text':
        return f'TEXT {name!r}'
    if kind == 'end':
        return f'</{name}>'
    astr = ' '.join(f'{k}="{v}"' for k, v in attrs)
    return f'<{name} {astr}>'.replace(' >', '>')

def diff(orig, built, label):
    a, b = toks(orig), toks(built)
    print(f'\n{"="*70}\n{label}\n  original: {len(a)} tokens   built: {len(b)} tokens\n{"="*70}')
    import difflib
    sm = difflib.SequenceMatcher(None, [fmt(x) for x in a], [fmt(x) for x in b], autojunk=False)
    diffs = 0
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == 'equal':
            continue
        diffs += 1
        print(f'\n--- {op.upper()} at orig[{i1}:{i2}] built[{j1}:{j2}]')
        for x in a[i1:i2][:12]:
            print(f'   - {fmt(x)[:180]}')
        for x in b[j1:j2][:12]:
            print(f'   + {fmt(x)[:180]}')
    if diffs == 0:
        print('\n  ✅ IDENTICAL (normalized DOM token stream)')
    else:
        print(f'\n  {diffs} difference block(s)')
    return diffs

# Compares the built output against the pre-migration HTML.
# Baseline defaults to the last commit before the migration branch.
import os, subprocess, tempfile
D = os.environ.get('DIST', 'dist')
BASE = os.environ.get('BASELINE_REF', 'origin/main')
S = tempfile.mkdtemp()
for src, dst in [('index.html', 'index.html'), ('nl/index.html', 'nl-index.html')]:
    out = subprocess.run(['git', 'show', f'{BASE}:{src}'], capture_output=True, text=True)
    if out.returncode:
        raise SystemExit(f'cannot read {BASE}:{src} — set BASELINE_REF to a pre-migration commit')
    open(os.path.join(S, dst), 'w', encoding='utf-8').write(out.stdout)
n = 0
n += diff(f'{S}/index.html', f'{D}/index.html', 'EN  /index.html')
n += diff(f'{S}/nl-index.html', f'{D}/nl/index.html', 'NL  /nl/index.html')
print(f'\n\nTOTAL DIFFERENCE BLOCKS: {n}')
sys.exit(0)
