---
title: "Author Profiles at Scale: Advice for Product Teams"
created-on: "2021-03-02T22:15:00Z"
updated-on: "2021-04-14T22:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

Most teams only notice author profiles once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
