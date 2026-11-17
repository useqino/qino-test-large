---
title: "Folder Structure for Documentation Sites"
created-on: "2024-09-18T12:00:00Z"
updated-on: "2024-10-14T12:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
