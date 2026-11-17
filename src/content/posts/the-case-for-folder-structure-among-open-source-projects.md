---
title: "The Case for Folder Structure Among Open Source Projects"
created-on: "2023-02-21T19:15:00Z"
updated-on: "2023-03-14T19:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

If you work with open source projects, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
