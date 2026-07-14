#!/usr/bin/env python3
"""Brand duotone recipe — deterministic luminance->color map. Pure Pillow, no numpy.
This IS the reusable 'visual code': same script, different color stops = different brand temperature.
"""
from PIL import Image, ImageChops
import sys

# Brand color ramps: (position 0..1, (R,G,B)). Shadows -> highlights.
COOL = [  # B2B Tinkerers — ink -> forest -> emerald -> chartreuse -> cream
    (0.00, (21, 20, 15)),
    (0.35, (18, 53, 40)),
    (0.62, (46, 125, 91)),
    (0.82, (183, 214, 43)),
    (1.00, (245, 240, 232)),
]
WARM = [  # Motion Tinkerers — ink -> deep brown -> orange -> amber -> cream
    (0.00, (20, 13, 7)),
    (0.35, (74, 33, 18)),
    (0.62, (214, 90, 30)),
    (0.82, (245, 179, 1)),
    (1.00, (248, 241, 231)),
]

def _lut(stops, ch):
    lut = []
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
        lut.append(int(round(val)))
    return lut

def duotone(src, dst, stops, grain_sigma=14, grain_amt=0.055, size=(1200, 514)):
    g = Image.open(src).convert("L")
    r = g.point(_lut(stops, 0))
    gg = g.point(_lut(stops, 1))
    b = g.point(_lut(stops, 2))
    out = Image.merge("RGB", (r, gg, b))
    # film grain: mid-gray noise blended subtly (keeps midtones, adds texture)
    noise = Image.effect_noise(out.size, grain_sigma).convert("L")
    out = Image.blend(out, Image.merge("RGB", (noise, noise, noise)), grain_amt)
    # crop-center to banner ratio, then resize
    tw, th = size
    target = tw / th
    w, h = out.size
    cur = w / h
    if cur > target:
        nw = int(h * target); x = (w - nw) // 2
        out = out.crop((x, 0, x + nw, h))
    else:
        nh = int(w / target); y = (h - nh) // 2
        out = out.crop((0, y, w, y + nh))
    out = out.resize(size, Image.LANCZOS)
    out.save(dst, quality=92)
    print(f"{dst}  {out.size}")

if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "duotone.png"
    duotone(src, "duotone-cool.png", COOL)
    duotone(src, "duotone-warm.png", WARM)
