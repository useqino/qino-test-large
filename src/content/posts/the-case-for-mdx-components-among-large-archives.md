---
title: "The Case for MDX Components Among Large Archives"
created-on: "2021-06-21T21:45:00Z"
updated-on: "2021-07-11T21:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
