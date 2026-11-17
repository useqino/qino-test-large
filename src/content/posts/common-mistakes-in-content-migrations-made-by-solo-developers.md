---
title: "Common Mistakes in Content Migrations Made by Solo Developers"
created-on: "2025-08-19T22:45:00Z"
updated-on: "2025-08-20T22:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

If you work with solo developers, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
