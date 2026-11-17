---
title: "Taxonomies: Lessons from Solo Developers"
created-on: "2024-03-06T13:00:00Z"
updated-on: "2024-04-29T13:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with solo developers and that consensus falls apart quickly.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
