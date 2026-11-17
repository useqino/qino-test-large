---
title: "Slug Design Patterns That Work for Marketing Sites"
created-on: "2022-05-26T13:30:00Z"
updated-on: "2022-07-15T13:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
