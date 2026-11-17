---
title: "Content Audits at Scale: Advice for Open Source Projects"
created-on: "2022-09-20T16:30:00Z"
updated-on: "2022-11-10T16:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

If you work with open source projects, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
