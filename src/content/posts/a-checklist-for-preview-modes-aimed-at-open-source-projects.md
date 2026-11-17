---
title: "A Checklist for Preview Modes Aimed at Open Source Projects"
created-on: "2024-07-18T22:00:00Z"
updated-on: "2024-07-31T22:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with open source projects and that consensus falls apart quickly.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
