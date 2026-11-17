---
title: "Small Wins in Alt Text for Startups"
created-on: "2023-07-20T13:30:00Z"
updated-on: "2023-09-09T13:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

There is a quiet consensus that alt text is solved. Spend a week with startups and that consensus falls apart quickly.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
