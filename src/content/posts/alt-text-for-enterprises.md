---
title: "Alt Text for Enterprises"
created-on: "2021-10-23T00:30:00Z"
updated-on: "2021-10-29T00:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about alt text. It grew, because every answer raised two more questions.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
