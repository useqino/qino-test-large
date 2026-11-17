---
title: "How Internal Wikis Approach RSS Feeds"
created-on: "2022-11-14T02:30:00Z"
updated-on: "2022-11-21T02:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
