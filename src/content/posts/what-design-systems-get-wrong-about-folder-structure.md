---
title: "What Design Systems Get Wrong About Folder Structure"
created-on: "2020-12-22T18:45:00Z"
updated-on: "2021-01-13T18:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with design systems and that consensus falls apart quickly.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
