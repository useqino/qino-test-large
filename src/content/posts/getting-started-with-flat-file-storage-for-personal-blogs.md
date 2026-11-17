---
title: "Getting Started with Flat-File Storage for Personal Blogs"
created-on: "2021-04-01T06:30:00Z"
updated-on: "2021-04-23T06:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that flat-file storage is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
