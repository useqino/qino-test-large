---
title: "Search Indexing, Revisited by E-commerce Catalogs"
created-on: "2023-10-24T03:30:00Z"
updated-on: "2023-12-22T03:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
