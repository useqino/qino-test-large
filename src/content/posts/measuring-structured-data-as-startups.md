---
title: "Measuring Structured Data as Startups"
created-on: "2021-07-24T10:15:00Z"
updated-on: "2021-08-27T10:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that structured data is solved. Spend a week with startups and that consensus falls apart quickly.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
