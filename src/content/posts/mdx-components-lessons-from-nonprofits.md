---
title: "MDX Components: Lessons from Nonprofits"
created-on: "2022-04-21T11:30:00Z"
updated-on: "2022-05-13T11:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

We rebuilt our approach to mdx components three times last year. Here is what survived.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
