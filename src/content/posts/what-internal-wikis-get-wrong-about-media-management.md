---
title: "What Internal Wikis Get Wrong About Media Management"
created-on: "2021-03-12T07:00:00Z"
updated-on: "2021-04-07T07:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

Most teams only notice media management once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
