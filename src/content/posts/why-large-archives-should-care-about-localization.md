---
title: "Why Large Archives Should Care About Localization"
created-on: "2025-01-05T23:45:00Z"
updated-on: "2025-02-07T23:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

There is a quiet consensus that localization is solved. Spend a week with large archives and that consensus falls apart quickly.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
