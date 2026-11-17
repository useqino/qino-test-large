---
title: "Slug Design for Technical Writers"
created-on: "2023-06-13T11:45:00Z"
updated-on: "2023-06-24T11:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

There is a quiet consensus that slug design is solved. Spend a week with technical writers and that consensus falls apart quickly.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
