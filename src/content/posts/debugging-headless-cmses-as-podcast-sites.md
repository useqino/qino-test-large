---
title: "Debugging Headless CMSes as Podcast Sites"
created-on: "2025-11-05T15:30:00Z"
updated-on: "2025-11-28T15:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
