---
title: "Sitemaps, Revisited by Documentation Sites"
created-on: "2026-02-14T12:30:00Z"
updated-on: "2026-03-19T12:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
