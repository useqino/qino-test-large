---
title: "Teaching Build Caching to Content Editors"
created-on: "2025-03-19T06:00:00Z"
updated-on: "2025-04-02T06:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about build caching. It grew, because every answer raised two more questions.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
