---
title: "A Checklist for Sitemaps Aimed at Course Platforms"
created-on: "2025-01-12T16:00:00Z"
updated-on: "2025-01-30T16:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
