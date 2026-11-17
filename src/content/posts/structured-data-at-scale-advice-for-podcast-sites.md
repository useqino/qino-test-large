---
title: "Structured Data at Scale: Advice for Podcast Sites"
created-on: "2022-12-15T01:15:00Z"
updated-on: "2023-02-12T01:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about structured data. It grew, because every answer raised two more questions.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
