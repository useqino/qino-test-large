---
title: "Git-Based Publishing in Practice: A Field Report from Agencies"
created-on: "2024-11-22T15:30:00Z"
updated-on: "2024-12-31T15:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
