---
title: "Headless CMSes Without the Hype, for Agencies"
created-on: "2021-09-30T12:15:00Z"
updated-on: "2021-10-01T12:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

Most teams only notice headless cmses once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
