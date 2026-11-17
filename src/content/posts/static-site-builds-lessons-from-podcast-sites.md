---
title: "Static Site Builds: Lessons from Podcast Sites"
created-on: "2025-04-21T18:30:00Z"
updated-on: "2025-06-05T18:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
