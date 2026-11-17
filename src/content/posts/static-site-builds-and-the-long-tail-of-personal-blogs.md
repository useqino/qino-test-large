---
title: "Static Site Builds and the Long Tail of Personal Blogs"
created-on: "2021-05-23T14:15:00Z"
updated-on: "2021-05-23T14:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
