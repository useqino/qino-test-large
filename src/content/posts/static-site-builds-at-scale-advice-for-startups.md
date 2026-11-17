---
title: "Static Site Builds at Scale: Advice for Startups"
created-on: "2025-04-14T08:45:00Z"
updated-on: "2025-05-07T08:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
