---
title: "What Agencies Get Wrong About Redirect Maps"
created-on: "2022-11-13T03:45:00Z"
updated-on: "2022-12-11T03:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that redirect maps is solved. Spend a week with agencies and that consensus falls apart quickly.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
