---
title: "Alt Text in Practice: A Field Report from Solo Developers"
created-on: "2023-06-09T18:00:00Z"
updated-on: "2023-06-23T18:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

alt text sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
