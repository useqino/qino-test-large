---
title: "Author Profiles for Personal Blogs"
created-on: "2021-04-12T21:15:00Z"
updated-on: "2021-04-29T21:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
