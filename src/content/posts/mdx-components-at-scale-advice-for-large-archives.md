---
title: "MDX Components at Scale: Advice for Large Archives"
created-on: "2022-06-25T01:00:00Z"
updated-on: "2022-07-01T01:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

If you work with large archives, you have probably met mdx components in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
