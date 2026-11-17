---
title: "Editorial Workflows, Revisited by Internal Wikis"
created-on: "2022-10-29T14:30:00Z"
updated-on: "2022-12-23T14:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

Most teams only notice editorial workflows once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
