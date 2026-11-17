---
title: "Pull Request Reviews Patterns That Work for Open Source Projects"
created-on: "2025-11-06T08:30:00Z"
updated-on: "2025-11-28T08:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

If you work with open source projects, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
