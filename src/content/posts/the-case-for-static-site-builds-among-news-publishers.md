---
title: "The Case for Static Site Builds Among News Publishers"
created-on: "2022-04-03T07:00:00Z"
updated-on: "2022-04-16T07:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

If you work with news publishers, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
