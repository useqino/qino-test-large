---
title: "What E-commerce Catalogs Get Wrong About Image Pipelines"
created-on: "2025-12-01T08:15:00Z"
updated-on: "2026-01-15T08:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
