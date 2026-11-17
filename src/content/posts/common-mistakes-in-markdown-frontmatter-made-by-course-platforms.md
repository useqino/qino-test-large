---
title: "Common Mistakes in Markdown Frontmatter Made by Course Platforms"
created-on: "2024-06-29T06:30:00Z"
updated-on: "2024-07-10T06:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
