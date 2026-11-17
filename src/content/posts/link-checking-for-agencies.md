---
title: "Link Checking for Agencies"
created-on: "2026-05-05T08:30:00Z"
updated-on: "2026-05-20T08:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that link checking is solved. Spend a week with agencies and that consensus falls apart quickly.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
