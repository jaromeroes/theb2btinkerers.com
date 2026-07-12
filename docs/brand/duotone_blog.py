#!/usr/bin/env python3
"""Batch-apply the brand COOL duotone to all raster blog images, in place (preserves size).
Part of the Tinkerers imagery system. Run from repo root:  python3 docs/brand/duotone_blog.py
Originals are tracked in git; revert with `git checkout -- src/assets/blog`.
"""
from PIL import Image, ImageOps
import glob, os, sys

# Cool ramp (B2B content): shadows ink -> forest -> emerald -> chartreuse -> cream highlights.
COOL = [
    (0.00, (21, 20, 15)),
    (0.35, (18, 53, 40)),
    (0.62, (46, 125, 91)),
    (0.82, (183, 214, 43)),
    (1.00, (245, 240, 232)),
]

def build_lut(stops, ch):
    out = []
    for i in range(256):
        t = i / 255.0
        val = stops[-1][1][ch]
        for j in range(len(stops) - 1):
            t0, c0 = stops[j]
            t1, c1 = stops[j + 1]
            if t0 <= t <= t1:
                f = (t - t0) / (t1 - t0) if t1 > t0 else 0.0
                val = c0[ch] + (c1[ch] - c0[ch]) * f
                break
        out.append(int(round(val)))
    return out

RL, GL, BL = build_lut(COOL, 0), build_lut(COOL, 1), build_lut(COOL, 2)

dirs = sys.argv[1:] or ["src/assets/blog"]
paths = []
for d in dirs:
    paths += sorted(glob.glob(f"{d}/*.webp") + glob.glob(f"{d}/*.png"))
for p in paths:
    im = Image.open(p).convert("L")
    im = ImageOps.autocontrast(im, cutoff=1)   # normalize tonal range for consistency
    r = im.point(RL); g = im.point(GL); b = im.point(BL)
    out = Image.merge("RGB", (r, g, b))
    n = Image.effect_noise(out.size, 13).convert("L")
    out = Image.blend(out, Image.merge("RGB", (n, n, n)), 0.05)   # film grain
    ext = os.path.splitext(p)[1].lower()
    if ext == ".webp":
        out.save(p, "WEBP", quality=88)
    else:
        out.save(p, "PNG")
    print("duotoned", os.path.basename(p), out.size)
print("done:", len(paths), "images")
