---
title: "Ten Questions About Link Checking from Enterprises"
created-on: "2023-01-10T10:00:00Z"
updated-on: "2023-02-26T10:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about link checking. It grew, because every answer raised two more questions.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
