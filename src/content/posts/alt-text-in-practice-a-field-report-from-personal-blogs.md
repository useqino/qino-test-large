---
title: "Alt Text in Practice: A Field Report from Personal Blogs"
created-on: "2023-10-12T17:00:00Z"
updated-on: "2023-11-21T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

There is a quiet consensus that alt text is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
