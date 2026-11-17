---
title: "A Checklist for RSS Feeds Aimed at Podcast Sites"
created-on: "2023-09-06T08:15:00Z"
updated-on: "2023-10-22T08:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

We rebuilt our approach to rss feeds three times last year. Here is what survived.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
