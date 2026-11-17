---
title: "Common Mistakes in Localization Made by Marketing Sites"
created-on: "2021-08-05T02:15:00Z"
updated-on: "2021-09-19T02:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
