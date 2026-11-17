---
title: "Why Course Platforms Should Care About Editorial Workflows"
created-on: "2023-07-22T02:30:00Z"
updated-on: "2023-08-19T02:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
