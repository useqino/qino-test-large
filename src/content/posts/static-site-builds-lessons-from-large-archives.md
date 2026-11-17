---
title: "Static Site Builds: Lessons from Large Archives"
created-on: "2021-08-22T23:30:00Z"
updated-on: "2021-09-08T23:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

If you work with large archives, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
