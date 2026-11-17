---
title: "Why Internal Wikis Should Care About Content Versioning"
created-on: "2023-04-30T15:45:00Z"
updated-on: "2023-05-18T15:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
