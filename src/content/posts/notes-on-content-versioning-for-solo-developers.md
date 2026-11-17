---
title: "Notes on Content Versioning for Solo Developers"
created-on: "2021-11-08T19:30:00Z"
updated-on: "2021-12-27T19:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that content versioning is solved. Spend a week with solo developers and that consensus falls apart quickly.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
