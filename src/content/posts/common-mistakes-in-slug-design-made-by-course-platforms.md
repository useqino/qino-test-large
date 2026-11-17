---
title: "Common Mistakes in Slug Design Made by Course Platforms"
created-on: "2025-04-22T11:15:00Z"
updated-on: "2025-05-30T11:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/seo.json"
---

If you work with course platforms, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

If you take one thing away, make it this: decide on purpose, and write the decision down.
