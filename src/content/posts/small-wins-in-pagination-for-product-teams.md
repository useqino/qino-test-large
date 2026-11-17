---
title: "Small Wins in Pagination for Product Teams"
created-on: "2025-11-19T05:30:00Z"
updated-on: "2025-12-21T05:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
