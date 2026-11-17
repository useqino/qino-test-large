---
title: "A Second Look at Schema Validation for Course Platforms"
created-on: "2023-01-25T13:00:00Z"
updated-on: "2023-03-10T13:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that schema validation is solved. Spend a week with course platforms and that consensus falls apart quickly.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
