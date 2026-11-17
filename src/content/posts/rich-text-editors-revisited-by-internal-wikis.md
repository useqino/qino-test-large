---
title: "Rich Text Editors, Revisited by Internal Wikis"
created-on: "2025-09-24T08:45:00Z"
updated-on: "2025-10-30T08:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that rich text editors is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
