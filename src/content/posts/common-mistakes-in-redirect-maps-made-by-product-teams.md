---
title: "Common Mistakes in Redirect Maps Made by Product Teams"
created-on: "2025-04-21T13:00:00Z"
updated-on: "2025-05-16T13:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
