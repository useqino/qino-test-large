---
title: "Content Linting and the Long Tail of News Publishers"
created-on: "2025-03-19T11:15:00Z"
updated-on: "2025-04-19T11:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

If you work with news publishers, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
