---
title: "How Podcast Sites Approach Sitemaps"
created-on: "2021-09-02T09:15:00Z"
updated-on: "2021-10-25T09:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
