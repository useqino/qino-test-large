---
title: "Image Pipelines: Lessons from Agencies"
created-on: "2022-04-24T18:00:00Z"
updated-on: "2022-05-09T18:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
