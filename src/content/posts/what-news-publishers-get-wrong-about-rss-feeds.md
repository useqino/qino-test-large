---
title: "What News Publishers Get Wrong About RSS Feeds"
created-on: "2025-07-10T09:15:00Z"
updated-on: "2025-08-05T09:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with news publishers and that consensus falls apart quickly.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
