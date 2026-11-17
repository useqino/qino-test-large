---
title: "Content Audits, Revisited by Content Editors"
created-on: "2023-10-24T20:15:00Z"
updated-on: "2023-12-02T20:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

Most teams only notice content audits once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
