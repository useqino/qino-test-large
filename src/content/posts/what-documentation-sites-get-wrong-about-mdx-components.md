---
title: "What Documentation Sites Get Wrong About MDX Components"
created-on: "2022-03-19T10:45:00Z"
updated-on: "2022-04-09T10:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

We rebuilt our approach to mdx components three times last year. Here is what survived.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
