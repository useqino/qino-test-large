---
title: "The Case for Schema Validation Among Startups"
created-on: "2024-03-08T02:00:00Z"
updated-on: "2024-04-07T02:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
