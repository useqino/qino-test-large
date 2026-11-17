---
title: "A Practical Guide to Content Migrations for Enterprises"
created-on: "2024-06-30T09:00:00Z"
updated-on: "2024-08-26T09:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
