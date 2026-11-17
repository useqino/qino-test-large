---
title: "Notes on Editorial Workflows for Open Source Projects"
created-on: "2024-04-27T00:45:00Z"
updated-on: "2024-05-08T00:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

If you work with open source projects, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
