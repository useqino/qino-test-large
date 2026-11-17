---
title: "What Personal Blogs Get Wrong About Reading Time"
created-on: "2024-04-25T19:30:00Z"
updated-on: "2024-06-15T19:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
