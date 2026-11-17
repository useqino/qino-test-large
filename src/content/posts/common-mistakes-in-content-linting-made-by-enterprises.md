---
title: "Common Mistakes in Content Linting Made by Enterprises"
created-on: "2022-08-19T06:00:00Z"
updated-on: "2022-09-05T06:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

If you work with enterprises, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
