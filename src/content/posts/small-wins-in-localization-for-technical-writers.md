---
title: "Small Wins in Localization for Technical Writers"
created-on: "2023-10-05T01:00:00Z"
updated-on: "2023-10-20T01:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that localization is solved. Spend a week with technical writers and that consensus falls apart quickly.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
