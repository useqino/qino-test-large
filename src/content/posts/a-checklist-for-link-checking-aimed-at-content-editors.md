---
title: "A Checklist for Link Checking Aimed at Content Editors"
created-on: "2025-10-17T01:00:00Z"
updated-on: "2025-11-06T01:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

If you work with content editors, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
