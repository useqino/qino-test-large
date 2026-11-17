---
title: "Getting Started with Image Pipelines for Technical Writers"
created-on: "2021-07-23T02:15:00Z"
updated-on: "2021-07-26T02:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
