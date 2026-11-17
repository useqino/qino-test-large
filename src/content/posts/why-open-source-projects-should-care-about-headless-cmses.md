---
title: "Why Open Source Projects Should Care About Headless CMSes"
created-on: "2025-10-21T00:45:00Z"
updated-on: "2025-11-25T00:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about headless cmses. It grew, because every answer raised two more questions.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
