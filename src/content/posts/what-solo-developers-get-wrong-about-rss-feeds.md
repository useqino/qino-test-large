---
title: "What Solo Developers Get Wrong About RSS Feeds"
created-on: "2025-10-02T07:45:00Z"
updated-on: "2025-11-08T07:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
