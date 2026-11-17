---
title: "Common Mistakes in Headless CMSes Made by Personal Blogs"
created-on: "2021-07-08T08:30:00Z"
updated-on: "2021-08-28T08:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

If you work with personal blogs, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
