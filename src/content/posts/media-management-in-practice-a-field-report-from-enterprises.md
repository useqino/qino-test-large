---
title: "Media Management in Practice: A Field Report from Enterprises"
created-on: "2026-03-25T21:15:00Z"
updated-on: "2026-05-13T21:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
