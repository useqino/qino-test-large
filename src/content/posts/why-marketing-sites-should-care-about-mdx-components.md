---
title: "Why Marketing Sites Should Care About MDX Components"
created-on: "2023-10-10T13:00:00Z"
updated-on: "2023-11-06T13:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
