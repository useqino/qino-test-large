---
title: "The Case for Image Pipelines Among Documentation Sites"
created-on: "2025-12-21T14:45:00Z"
updated-on: "2026-01-11T14:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

Most teams only notice image pipelines once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
