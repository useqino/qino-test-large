---
title: "What E-commerce Catalogs Get Wrong About Content Versioning"
created-on: "2025-08-07T04:15:00Z"
updated-on: "2025-10-05T04:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

We rebuilt our approach to content versioning three times last year. Here is what survived.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
