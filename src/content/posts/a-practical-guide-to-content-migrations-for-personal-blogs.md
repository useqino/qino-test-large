---
title: "A Practical Guide to Content Migrations for Personal Blogs"
created-on: "2021-07-25T05:45:00Z"
updated-on: "2021-08-10T05:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

There is a quiet consensus that content migrations is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

If you take one thing away, make it this: decide on purpose, and write the decision down.
