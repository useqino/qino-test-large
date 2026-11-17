---
title: "A Checklist for Markdown Frontmatter Aimed at Product Teams"
created-on: "2023-07-04T11:30:00Z"
updated-on: "2023-07-06T11:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
