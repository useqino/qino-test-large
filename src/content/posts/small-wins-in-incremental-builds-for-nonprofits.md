---
title: "Small Wins in Incremental Builds for Nonprofits"
created-on: "2024-10-15T10:45:00Z"
updated-on: "2024-10-16T10:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
