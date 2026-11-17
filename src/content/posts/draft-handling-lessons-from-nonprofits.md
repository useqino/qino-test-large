---
title: "Draft Handling: Lessons from Nonprofits"
created-on: "2021-05-05T02:00:00Z"
updated-on: "2021-06-20T02:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

We rebuilt our approach to draft handling three times last year. Here is what survived.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
