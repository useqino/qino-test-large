---
title: "What Podcast Sites Get Wrong About Slug Design"
created-on: "2022-07-28T19:00:00Z"
updated-on: "2022-08-01T19:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with podcast sites, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
