---
title: "The Hidden Cost of Git-Based Publishing for Personal Blogs"
created-on: "2022-11-28T05:45:00Z"
updated-on: "2022-12-02T05:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
