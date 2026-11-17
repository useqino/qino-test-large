---
title: "The Hidden Cost of Type-Safe Content for Large Archives"
created-on: "2022-07-14T03:15:00Z"
updated-on: "2022-09-10T03:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

We rebuilt our approach to type-safe content three times last year. Here is what survived.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
