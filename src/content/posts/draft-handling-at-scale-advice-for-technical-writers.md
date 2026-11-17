---
title: "Draft Handling at Scale: Advice for Technical Writers"
created-on: "2021-09-01T07:45:00Z"
updated-on: "2021-10-29T07:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
