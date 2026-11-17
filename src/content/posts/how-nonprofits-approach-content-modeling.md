---
title: "How Nonprofits Approach Content Modeling"
created-on: "2023-03-31T12:15:00Z"
updated-on: "2023-04-06T12:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

If you work with nonprofits, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
