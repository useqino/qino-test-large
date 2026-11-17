---
title: "A Practical Guide to Pull Request Reviews for Personal Blogs"
created-on: "2024-03-10T08:15:00Z"
updated-on: "2024-04-23T08:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

Most teams only notice pull request reviews once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
