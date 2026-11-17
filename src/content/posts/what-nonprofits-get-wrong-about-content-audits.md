---
title: "What Nonprofits Get Wrong About Content Audits"
created-on: "2026-08-18T21:15:00Z"
updated-on: "2026-08-24T21:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

There is a quiet consensus that content audits is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
