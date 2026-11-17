---
title: "How Podcast Sites Approach Code Highlighting"
created-on: "2022-04-23T23:45:00Z"
updated-on: "2022-05-31T23:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

If you work with podcast sites, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
