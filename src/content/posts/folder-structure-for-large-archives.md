---
title: "Folder Structure for Large Archives"
created-on: "2023-07-01T16:00:00Z"
updated-on: "2023-07-15T16:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with large archives and that consensus falls apart quickly.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
