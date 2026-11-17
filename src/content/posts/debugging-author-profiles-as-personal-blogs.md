---
title: "Debugging Author Profiles as Personal Blogs"
created-on: "2026-05-17T03:30:00Z"
updated-on: "2026-06-11T03:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
