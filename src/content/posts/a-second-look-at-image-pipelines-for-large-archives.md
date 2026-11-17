---
title: "A Second Look at Image Pipelines for Large Archives"
created-on: "2023-11-25T00:15:00Z"
updated-on: "2023-11-29T00:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
