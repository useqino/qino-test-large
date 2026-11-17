---
title: "Small Wins in Folder Structure for Open Source Projects"
created-on: "2021-06-20T12:30:00Z"
updated-on: "2021-07-18T12:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
