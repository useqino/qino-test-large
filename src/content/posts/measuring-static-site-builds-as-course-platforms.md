---
title: "Measuring Static Site Builds as Course Platforms"
created-on: "2022-07-02T06:15:00Z"
updated-on: "2022-08-07T06:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with course platforms and that consensus falls apart quickly.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
