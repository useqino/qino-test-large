---
title: "A Checklist for Folder Structure Aimed at Podcast Sites"
created-on: "2021-07-20T16:00:00Z"
updated-on: "2021-09-09T16:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

folder structure sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
