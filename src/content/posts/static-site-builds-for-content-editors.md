---
title: "Static Site Builds for Content Editors"
created-on: "2023-08-22T13:30:00Z"
updated-on: "2023-09-17T13:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
