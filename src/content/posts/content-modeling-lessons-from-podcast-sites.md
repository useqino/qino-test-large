---
title: "Content Modeling: Lessons from Podcast Sites"
created-on: "2026-10-06T03:30:00Z"
updated-on: "2026-11-25T03:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

content modeling sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
