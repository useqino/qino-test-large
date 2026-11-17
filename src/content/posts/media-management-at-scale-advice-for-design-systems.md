---
title: "Media Management at Scale: Advice for Design Systems"
created-on: "2023-11-15T02:00:00Z"
updated-on: "2023-12-07T02:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

There is a quiet consensus that media management is solved. Spend a week with design systems and that consensus falls apart quickly.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
