---
title: "Redirect Maps for Solo Developers"
created-on: "2023-02-26T22:15:00Z"
updated-on: "2023-03-06T22:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

If you work with solo developers, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
