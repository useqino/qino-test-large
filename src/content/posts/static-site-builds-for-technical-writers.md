---
title: "Static Site Builds for Technical Writers"
created-on: "2024-05-12T14:00:00Z"
updated-on: "2024-06-03T14:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

If you work with technical writers, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
