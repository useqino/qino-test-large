---
title: "Teaching Build Caching to Design Systems"
created-on: "2024-09-28T21:30:00Z"
updated-on: "2024-10-01T21:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
