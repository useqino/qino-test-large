---
title: "Why Course Platforms Should Care About Headless CMSes"
created-on: "2022-03-10T17:30:00Z"
updated-on: "2022-03-19T17:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with course platforms and that consensus falls apart quickly.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
