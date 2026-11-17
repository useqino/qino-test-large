---
title: "A Practical Guide to Content Versioning for Design Systems"
created-on: "2023-10-31T19:00:00Z"
updated-on: "2023-12-18T19:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

If you work with design systems, you have probably met content versioning in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
