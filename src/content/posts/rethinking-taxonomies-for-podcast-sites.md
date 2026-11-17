---
title: "Rethinking Taxonomies for Podcast Sites"
created-on: "2024-08-13T11:00:00Z"
updated-on: "2024-09-19T11:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
