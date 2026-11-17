---
title: "Ten Questions About Code Highlighting from Enterprises"
created-on: "2022-08-23T22:15:00Z"
updated-on: "2022-10-13T22:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

If you work with enterprises, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
