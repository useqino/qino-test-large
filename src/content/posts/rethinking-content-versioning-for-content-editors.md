---
title: "Rethinking Content Versioning for Content Editors"
created-on: "2023-12-22T13:15:00Z"
updated-on: "2024-01-08T13:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
