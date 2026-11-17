---
title: "Folder Structure for Technical Writers"
created-on: "2025-06-08T08:45:00Z"
updated-on: "2025-07-19T08:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

Most teams only notice folder structure once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
