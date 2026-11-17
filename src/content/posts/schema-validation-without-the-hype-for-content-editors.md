---
title: "Schema Validation Without the Hype, for Content Editors"
created-on: "2021-05-23T03:00:00Z"
updated-on: "2021-07-12T03:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
