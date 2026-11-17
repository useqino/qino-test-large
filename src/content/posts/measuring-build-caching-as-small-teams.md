---
title: "Measuring Build Caching as Small Teams"
created-on: "2026-04-16T01:30:00Z"
updated-on: "2026-05-23T01:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/seo.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
