---
title: "Markdown Frontmatter, Revisited by Documentation Sites"
created-on: "2023-06-02T11:00:00Z"
updated-on: "2023-06-02T11:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

Most teams only notice markdown frontmatter once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
