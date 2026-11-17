---
title: "Localization, Revisited by Solo Developers"
created-on: "2025-05-17T10:45:00Z"
updated-on: "2025-06-18T10:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
