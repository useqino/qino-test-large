---
title: "Slug Design and the Long Tail of Podcast Sites"
created-on: "2025-07-03T15:45:00Z"
updated-on: "2025-08-20T15:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

There is a quiet consensus that slug design is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
