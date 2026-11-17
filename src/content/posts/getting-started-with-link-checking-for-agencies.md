---
title: "Getting Started with Link Checking for Agencies"
created-on: "2025-09-14T06:15:00Z"
updated-on: "2025-10-07T06:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about link checking. It grew, because every answer raised two more questions.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
