---
title: "Getting Started with Editorial Workflows for Enterprises"
created-on: "2023-02-21T10:00:00Z"
updated-on: "2023-04-19T10:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with enterprises and that consensus falls apart quickly.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
