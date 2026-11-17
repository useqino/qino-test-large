---
title: "Why Open Source Projects Should Care About Content Modeling"
created-on: "2026-03-05T04:45:00Z"
updated-on: "2026-05-03T04:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

If you work with open source projects, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
