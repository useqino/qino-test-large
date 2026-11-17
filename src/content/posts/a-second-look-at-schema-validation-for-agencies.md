---
title: "A Second Look at Schema Validation for Agencies"
created-on: "2025-10-04T22:30:00Z"
updated-on: "2025-11-24T22:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
