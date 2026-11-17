---
title: "What Enterprises Get Wrong About Slug Design"
created-on: "2023-04-28T03:00:00Z"
updated-on: "2023-05-12T03:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to slug design three times last year. Here is what survived.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
