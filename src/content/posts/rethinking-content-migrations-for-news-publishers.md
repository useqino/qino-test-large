---
title: "Rethinking Content Migrations for News Publishers"
created-on: "2020-11-12T09:45:00Z"
updated-on: "2020-12-20T09:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
