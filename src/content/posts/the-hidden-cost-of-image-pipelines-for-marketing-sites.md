---
title: "The Hidden Cost of Image Pipelines for Marketing Sites"
created-on: "2021-08-04T23:15:00Z"
updated-on: "2021-08-22T23:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
