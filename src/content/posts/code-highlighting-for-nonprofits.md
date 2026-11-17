---
title: "Code Highlighting for Nonprofits"
created-on: "2022-08-20T21:00:00Z"
updated-on: "2022-10-18T21:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

code highlighting sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
