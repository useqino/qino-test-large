---
title: "Why Podcast Sites Should Care About Draft Handling"
created-on: "2021-12-21T00:30:00Z"
updated-on: "2022-02-07T00:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

draft handling sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
