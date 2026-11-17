---
title: "Small Wins in Pull Request Reviews for Solo Developers"
created-on: "2021-12-27T17:00:00Z"
updated-on: "2022-01-20T17:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about pull request reviews. It grew, because every answer raised two more questions.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
