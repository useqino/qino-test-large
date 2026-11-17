---
title: "The Hidden Cost of Folder Structure for Enterprises"
created-on: "2022-04-30T05:00:00Z"
updated-on: "2022-06-09T05:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

folder structure sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
