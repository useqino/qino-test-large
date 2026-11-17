---
title: "Editorial Workflows for Personal Blogs"
created-on: "2025-10-10T05:00:00Z"
updated-on: "2025-12-08T05:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
