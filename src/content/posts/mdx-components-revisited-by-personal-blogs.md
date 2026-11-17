---
title: "MDX Components, Revisited by Personal Blogs"
created-on: "2024-09-14T21:30:00Z"
updated-on: "2024-09-27T21:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
