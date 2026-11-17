---
title: "Debugging Schema Validation as Agencies"
created-on: "2024-08-21T13:15:00Z"
updated-on: "2024-08-27T13:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
