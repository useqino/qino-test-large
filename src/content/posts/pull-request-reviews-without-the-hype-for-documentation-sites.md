---
title: "Pull Request Reviews Without the Hype, for Documentation Sites"
created-on: "2025-04-02T15:15:00Z"
updated-on: "2025-04-28T15:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that pull request reviews is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
