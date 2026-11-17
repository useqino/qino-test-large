---
title: "Taxonomies at Scale: Advice for Product Teams"
created-on: "2022-07-06T21:15:00Z"
updated-on: "2022-07-28T21:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
