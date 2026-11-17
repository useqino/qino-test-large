---
title: "Editorial Workflows in Practice: A Field Report from Podcast Sites"
created-on: "2021-09-17T04:30:00Z"
updated-on: "2021-10-07T04:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about editorial workflows. It grew, because every answer raised two more questions.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
