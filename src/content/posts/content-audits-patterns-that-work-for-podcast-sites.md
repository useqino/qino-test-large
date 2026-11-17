---
title: "Content Audits Patterns That Work for Podcast Sites"
created-on: "2021-12-03T11:00:00Z"
updated-on: "2021-12-26T11:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about content audits. It grew, because every answer raised two more questions.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
