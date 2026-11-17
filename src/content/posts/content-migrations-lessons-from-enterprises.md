---
title: "Content Migrations: Lessons from Enterprises"
created-on: "2021-02-05T05:45:00Z"
updated-on: "2021-03-15T05:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
