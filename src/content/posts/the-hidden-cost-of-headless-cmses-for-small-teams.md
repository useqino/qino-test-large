---
title: "The Hidden Cost of Headless CMSes for Small Teams"
created-on: "2021-11-15T11:45:00Z"
updated-on: "2021-12-14T11:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with small teams and that consensus falls apart quickly.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
