---
title: "Common Mistakes in Editorial Workflows Made by Personal Blogs"
created-on: "2022-01-11T08:15:00Z"
updated-on: "2022-03-06T08:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
