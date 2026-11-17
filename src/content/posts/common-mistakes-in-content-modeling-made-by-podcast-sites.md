---
title: "Common Mistakes in Content Modeling Made by Podcast Sites"
created-on: "2023-10-20T07:45:00Z"
updated-on: "2023-11-11T07:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

If you work with podcast sites, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
