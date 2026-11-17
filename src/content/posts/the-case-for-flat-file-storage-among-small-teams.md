---
title: "The Case for Flat-File Storage Among Small Teams"
created-on: "2024-01-14T04:30:00Z"
updated-on: "2024-02-24T04:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
