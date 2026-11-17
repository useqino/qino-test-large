---
title: "Flat-File Storage for Product Teams"
created-on: "2024-01-21T06:15:00Z"
updated-on: "2024-03-09T06:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
