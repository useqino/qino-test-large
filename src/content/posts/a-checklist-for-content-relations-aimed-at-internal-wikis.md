---
title: "A Checklist for Content Relations Aimed at Internal Wikis"
created-on: "2026-02-24T19:45:00Z"
updated-on: "2026-04-18T19:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

If you work with internal wikis, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
