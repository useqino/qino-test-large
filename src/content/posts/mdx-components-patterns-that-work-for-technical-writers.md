---
title: "MDX Components Patterns That Work for Technical Writers"
created-on: "2022-03-02T07:00:00Z"
updated-on: "2022-03-22T07:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

If you work with technical writers, you have probably met mdx components in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
