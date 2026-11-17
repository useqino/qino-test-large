---
title: "Code Highlighting at Scale: Advice for Agencies"
created-on: "2021-07-19T00:00:00Z"
updated-on: "2021-08-20T00:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with agencies and that consensus falls apart quickly.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
