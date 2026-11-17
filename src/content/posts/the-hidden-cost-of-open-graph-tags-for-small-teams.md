---
title: "The Hidden Cost of Open Graph Tags for Small Teams"
created-on: "2025-12-03T17:15:00Z"
updated-on: "2025-12-09T17:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

If you work with small teams, you have probably met open graph tags in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
