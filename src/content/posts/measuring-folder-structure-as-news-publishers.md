---
title: "Measuring Folder Structure as News Publishers"
created-on: "2023-02-17T10:15:00Z"
updated-on: "2023-04-03T10:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

Most teams only notice folder structure once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
