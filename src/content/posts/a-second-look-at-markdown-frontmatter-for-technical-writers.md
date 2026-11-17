---
title: "A Second Look at Markdown Frontmatter for Technical Writers"
created-on: "2025-05-08T22:00:00Z"
updated-on: "2025-05-12T22:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
