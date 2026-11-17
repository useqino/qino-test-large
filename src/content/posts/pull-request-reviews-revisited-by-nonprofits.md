---
title: "Pull Request Reviews, Revisited by Nonprofits"
created-on: "2024-03-01T09:00:00Z"
updated-on: "2024-03-19T09:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

If you work with nonprofits, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
