---
title: "Content Migrations Patterns That Work for Documentation Sites"
created-on: "2022-07-18T01:00:00Z"
updated-on: "2022-07-31T01:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

Most teams only notice content migrations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
