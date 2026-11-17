---
title: "Ten Questions About Structured Data from Open Source Projects"
created-on: "2022-05-23T13:15:00Z"
updated-on: "2022-06-18T13:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to structured data three times last year. Here is what survived.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
