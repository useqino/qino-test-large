---
title: "Preview Modes Patterns That Work for Personal Blogs"
created-on: "2023-08-07T08:45:00Z"
updated-on: "2023-08-25T08:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

Most teams only notice preview modes once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
