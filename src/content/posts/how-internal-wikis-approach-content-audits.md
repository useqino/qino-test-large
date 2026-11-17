---
title: "How Internal Wikis Approach Content Audits"
created-on: "2022-01-01T09:45:00Z"
updated-on: "2022-02-18T09:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about content audits. It grew, because every answer raised two more questions.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
