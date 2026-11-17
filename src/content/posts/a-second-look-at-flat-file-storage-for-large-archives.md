---
title: "A Second Look at Flat-File Storage for Large Archives"
created-on: "2022-01-04T09:45:00Z"
updated-on: "2022-03-04T09:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
