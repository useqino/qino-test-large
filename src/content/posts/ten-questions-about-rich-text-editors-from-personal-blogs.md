---
title: "Ten Questions About Rich Text Editors from Personal Blogs"
created-on: "2022-07-26T20:00:00Z"
updated-on: "2022-09-14T20:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

If you work with personal blogs, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
