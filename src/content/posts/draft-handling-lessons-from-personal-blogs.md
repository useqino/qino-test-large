---
title: "Draft Handling: Lessons from Personal Blogs"
created-on: "2022-01-06T05:15:00Z"
updated-on: "2022-03-01T05:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
