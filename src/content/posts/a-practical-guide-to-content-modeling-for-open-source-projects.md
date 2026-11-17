---
title: "A Practical Guide to Content Modeling for Open Source Projects"
created-on: "2022-12-26T08:30:00Z"
updated-on: "2023-01-12T08:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

content modeling sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
