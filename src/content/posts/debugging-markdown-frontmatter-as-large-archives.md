---
title: "Debugging Markdown Frontmatter as Large Archives"
created-on: "2021-03-02T05:30:00Z"
updated-on: "2021-03-06T05:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

If you work with large archives, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
