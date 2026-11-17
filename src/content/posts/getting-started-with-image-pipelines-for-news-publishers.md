---
title: "Getting Started with Image Pipelines for News Publishers"
created-on: "2025-01-05T23:00:00Z"
updated-on: "2025-02-08T23:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
