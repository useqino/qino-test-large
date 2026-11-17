---
title: "Content Modeling for Design Systems"
created-on: "2023-12-22T06:15:00Z"
updated-on: "2024-02-08T06:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about content modeling. It grew, because every answer raised two more questions.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
