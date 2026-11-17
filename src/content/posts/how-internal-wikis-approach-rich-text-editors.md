---
title: "How Internal Wikis Approach Rich Text Editors"
created-on: "2026-06-29T11:45:00Z"
updated-on: "2026-08-05T11:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

Most teams only notice rich text editors once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
