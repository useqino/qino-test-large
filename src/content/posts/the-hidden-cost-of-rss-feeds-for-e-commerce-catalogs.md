---
title: "The Hidden Cost of RSS Feeds for E-commerce Catalogs"
created-on: "2023-12-29T13:45:00Z"
updated-on: "2024-02-10T13:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about rss feeds. It grew, because every answer raised two more questions.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
