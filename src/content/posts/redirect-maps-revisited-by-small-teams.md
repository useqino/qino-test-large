---
title: "Redirect Maps, Revisited by Small Teams"
created-on: "2022-07-30T07:30:00Z"
updated-on: "2022-08-11T07:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

If you work with small teams, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
