---
title: "Build Caching: Lessons from Startups"
created-on: "2023-07-21T14:45:00Z"
updated-on: "2023-09-02T14:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
