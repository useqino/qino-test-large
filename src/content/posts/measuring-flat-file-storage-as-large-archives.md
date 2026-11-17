---
title: "Measuring Flat-File Storage as Large Archives"
created-on: "2025-08-12T20:15:00Z"
updated-on: "2025-09-22T20:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
