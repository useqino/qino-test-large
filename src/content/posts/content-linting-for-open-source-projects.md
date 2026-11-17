---
title: "Content Linting for Open Source Projects"
created-on: "2021-12-03T04:45:00Z"
updated-on: "2021-12-24T04:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
