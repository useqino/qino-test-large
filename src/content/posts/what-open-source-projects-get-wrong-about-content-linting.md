---
title: "What Open Source Projects Get Wrong About Content Linting"
created-on: "2022-01-12T12:15:00Z"
updated-on: "2022-03-08T12:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that content linting is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
