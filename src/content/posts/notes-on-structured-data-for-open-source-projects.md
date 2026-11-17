---
title: "Notes on Structured Data for Open Source Projects"
created-on: "2022-12-26T10:15:00Z"
updated-on: "2023-02-13T10:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that structured data is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
