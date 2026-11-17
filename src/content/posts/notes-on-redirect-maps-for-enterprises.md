---
title: "Notes on Redirect Maps for Enterprises"
created-on: "2021-12-05T01:15:00Z"
updated-on: "2021-12-18T01:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

If you work with enterprises, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
