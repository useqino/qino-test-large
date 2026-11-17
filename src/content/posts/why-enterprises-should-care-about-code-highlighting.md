---
title: "Why Enterprises Should Care About Code Highlighting"
created-on: "2021-09-12T18:15:00Z"
updated-on: "2021-10-15T18:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

Most teams only notice code highlighting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
