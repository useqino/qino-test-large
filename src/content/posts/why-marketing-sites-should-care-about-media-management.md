---
title: "Why Marketing Sites Should Care About Media Management"
created-on: "2022-11-03T02:00:00Z"
updated-on: "2022-12-19T02:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about media management. It grew, because every answer raised two more questions.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
