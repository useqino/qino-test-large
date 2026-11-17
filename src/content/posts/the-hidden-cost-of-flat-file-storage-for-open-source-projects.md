---
title: "The Hidden Cost of Flat-File Storage for Open Source Projects"
created-on: "2021-08-30T08:30:00Z"
updated-on: "2021-09-25T08:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
