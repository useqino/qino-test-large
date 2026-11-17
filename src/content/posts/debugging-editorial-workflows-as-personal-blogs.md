---
title: "Debugging Editorial Workflows as Personal Blogs"
created-on: "2023-09-04T04:00:00Z"
updated-on: "2023-10-28T04:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
