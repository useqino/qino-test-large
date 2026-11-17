---
title: "The Hidden Cost of Search Indexing for Startups"
created-on: "2023-05-01T08:45:00Z"
updated-on: "2023-06-26T08:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
