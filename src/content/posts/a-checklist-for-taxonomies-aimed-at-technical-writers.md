---
title: "A Checklist for Taxonomies Aimed at Technical Writers"
created-on: "2021-01-17T11:15:00Z"
updated-on: "2021-02-17T11:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

Most teams only notice taxonomies once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
