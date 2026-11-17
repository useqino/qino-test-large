---
title: "What Internal Wikis Get Wrong About Link Checking"
created-on: "2025-09-20T22:00:00Z"
updated-on: "2025-10-07T22:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/seo.json"
---

If you work with internal wikis, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
