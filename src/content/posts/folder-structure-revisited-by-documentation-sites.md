---
title: "Folder Structure, Revisited by Documentation Sites"
created-on: "2023-11-13T18:15:00Z"
updated-on: "2023-11-24T18:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
