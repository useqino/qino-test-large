---
title: "Pagination, Revisited by Podcast Sites"
created-on: "2026-02-15T21:15:00Z"
updated-on: "2026-03-10T21:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
