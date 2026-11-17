---
title: "Teaching Search Indexing to Documentation Sites"
created-on: "2021-06-29T19:15:00Z"
updated-on: "2021-08-17T19:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
