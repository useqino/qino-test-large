---
title: "Content Migrations: Lessons from Large Archives"
created-on: "2025-11-07T17:30:00Z"
updated-on: "2025-11-25T17:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
