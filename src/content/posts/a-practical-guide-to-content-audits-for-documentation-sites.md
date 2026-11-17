---
title: "A Practical Guide to Content Audits for Documentation Sites"
created-on: "2023-01-07T17:00:00Z"
updated-on: "2023-03-02T17:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

content audits sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
