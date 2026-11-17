---
title: "Getting Started with Flat-File Storage for Nonprofits"
created-on: "2026-03-22T12:15:00Z"
updated-on: "2026-05-02T12:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with nonprofits, you have probably met flat-file storage in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
