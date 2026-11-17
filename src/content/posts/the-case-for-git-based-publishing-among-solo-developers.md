---
title: "The Case for Git-Based Publishing Among Solo Developers"
created-on: "2024-08-22T15:45:00Z"
updated-on: "2024-09-19T15:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with solo developers and that consensus falls apart quickly.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
