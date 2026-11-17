---
title: "A Checklist for Author Profiles Aimed at E-commerce Catalogs"
created-on: "2023-04-10T13:15:00Z"
updated-on: "2023-04-27T13:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
