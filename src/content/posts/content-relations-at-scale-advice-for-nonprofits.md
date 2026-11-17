---
title: "Content Relations at Scale: Advice for Nonprofits"
created-on: "2022-04-11T19:30:00Z"
updated-on: "2022-05-04T19:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

If you work with nonprofits, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
