---
title: "Common Mistakes in Build Caching Made by Content Editors"
created-on: "2023-11-25T11:15:00Z"
updated-on: "2024-01-20T11:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that build caching is solved. Spend a week with content editors and that consensus falls apart quickly.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
