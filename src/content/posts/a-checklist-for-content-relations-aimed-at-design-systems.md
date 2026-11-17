---
title: "A Checklist for Content Relations Aimed at Design Systems"
created-on: "2024-04-09T16:00:00Z"
updated-on: "2024-05-07T16:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

Most teams only notice content relations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
