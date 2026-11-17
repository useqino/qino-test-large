---
title: "Flat-File Storage Patterns That Work for Solo Developers"
created-on: "2025-09-04T03:45:00Z"
updated-on: "2025-09-14T03:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
