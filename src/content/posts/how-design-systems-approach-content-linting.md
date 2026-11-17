---
title: "How Design Systems Approach Content Linting"
created-on: "2021-08-19T03:30:00Z"
updated-on: "2021-09-10T03:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that content linting is solved. Spend a week with design systems and that consensus falls apart quickly.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
