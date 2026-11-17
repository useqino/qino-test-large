---
title: "Measuring Pagination as Small Teams"
created-on: "2022-10-13T20:15:00Z"
updated-on: "2022-11-17T20:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
