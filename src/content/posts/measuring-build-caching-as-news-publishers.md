---
title: "Measuring Build Caching as News Publishers"
created-on: "2021-08-25T03:30:00Z"
updated-on: "2021-10-05T03:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about build caching. It grew, because every answer raised two more questions.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
