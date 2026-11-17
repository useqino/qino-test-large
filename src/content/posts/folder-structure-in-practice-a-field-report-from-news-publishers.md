---
title: "Folder Structure in Practice: A Field Report from News Publishers"
created-on: "2025-04-11T18:45:00Z"
updated-on: "2025-05-28T18:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
