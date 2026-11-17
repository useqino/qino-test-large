---
title: "Rethinking Alt Text for Product Teams"
created-on: "2024-02-02T10:15:00Z"
updated-on: "2024-03-27T10:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about alt text. It grew, because every answer raised two more questions.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
