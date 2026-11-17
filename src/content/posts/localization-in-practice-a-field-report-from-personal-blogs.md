---
title: "Localization in Practice: A Field Report from Personal Blogs"
created-on: "2023-07-13T15:00:00Z"
updated-on: "2023-09-06T15:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
