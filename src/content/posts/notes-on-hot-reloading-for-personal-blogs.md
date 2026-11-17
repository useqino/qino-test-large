---
title: "Notes on Hot Reloading for Personal Blogs"
created-on: "2020-11-24T00:15:00Z"
updated-on: "2020-12-02T00:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

If you work with personal blogs, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
