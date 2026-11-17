---
title: "What Agencies Get Wrong About Alt Text"
created-on: "2026-05-31T13:00:00Z"
updated-on: "2026-07-02T13:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about alt text. It grew, because every answer raised two more questions.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
