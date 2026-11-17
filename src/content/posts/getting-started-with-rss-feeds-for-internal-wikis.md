---
title: "Getting Started with RSS Feeds for Internal Wikis"
created-on: "2023-10-27T18:30:00Z"
updated-on: "2023-12-13T18:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

Most teams only notice rss feeds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
