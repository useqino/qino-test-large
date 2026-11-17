---
title: "Getting Started with Structured Data for Internal Wikis"
created-on: "2024-10-22T05:00:00Z"
updated-on: "2024-11-09T05:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

Most teams only notice structured data once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
