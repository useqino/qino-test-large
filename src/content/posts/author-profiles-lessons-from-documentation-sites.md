---
title: "Author Profiles: Lessons from Documentation Sites"
created-on: "2026-02-07T08:45:00Z"
updated-on: "2026-02-16T08:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

If you work with documentation sites, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
