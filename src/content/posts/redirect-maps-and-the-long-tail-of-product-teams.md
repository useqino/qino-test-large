---
title: "Redirect Maps and the Long Tail of Product Teams"
created-on: "2024-10-29T18:00:00Z"
updated-on: "2024-11-12T18:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
