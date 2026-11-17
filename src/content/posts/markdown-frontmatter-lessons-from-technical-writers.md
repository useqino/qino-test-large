---
title: "Markdown Frontmatter: Lessons from Technical Writers"
created-on: "2024-01-18T09:30:00Z"
updated-on: "2024-01-30T09:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

Most teams only notice markdown frontmatter once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
