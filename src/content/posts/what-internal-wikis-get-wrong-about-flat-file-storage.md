---
title: "What Internal Wikis Get Wrong About Flat-File Storage"
created-on: "2024-07-11T00:15:00Z"
updated-on: "2024-08-24T00:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
