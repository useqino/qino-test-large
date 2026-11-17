---
title: "Markdown Frontmatter at Scale: Advice for Marketing Sites"
created-on: "2026-10-21T12:15:00Z"
updated-on: "2026-11-10T12:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

If you work with marketing sites, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
