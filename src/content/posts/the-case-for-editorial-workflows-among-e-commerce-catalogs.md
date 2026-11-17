---
title: "The Case for Editorial Workflows Among E-commerce Catalogs"
created-on: "2023-05-02T12:00:00Z"
updated-on: "2023-06-13T12:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about editorial workflows. It grew, because every answer raised two more questions.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
