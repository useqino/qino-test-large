---
title: "Measuring Content Audits as Technical Writers"
created-on: "2020-12-18T08:15:00Z"
updated-on: "2021-02-07T08:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

Most teams only notice content audits once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
