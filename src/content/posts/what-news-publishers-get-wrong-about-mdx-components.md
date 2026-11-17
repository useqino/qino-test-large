---
title: "What News Publishers Get Wrong About MDX Components"
created-on: "2024-11-23T02:45:00Z"
updated-on: "2024-12-06T02:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about mdx components. It grew, because every answer raised two more questions.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
