---
title: "Teaching Git-Based Publishing to Podcast Sites"
created-on: "2025-04-28T12:30:00Z"
updated-on: "2025-06-10T12:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
