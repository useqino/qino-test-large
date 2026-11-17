---
title: "Notes on Code Highlighting for Solo Developers"
created-on: "2023-03-30T02:00:00Z"
updated-on: "2023-04-17T02:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

If you work with solo developers, you have probably met code highlighting in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
