---
title: "Small Wins in Pagination for Agencies"
created-on: "2021-03-22T11:15:00Z"
updated-on: "2021-03-26T11:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
