---
title: "Teaching Type-Safe Content to Content Editors"
created-on: "2021-10-26T05:00:00Z"
updated-on: "2021-10-28T05:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
