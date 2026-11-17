---
title: "A Practical Guide to Rich Text Editors for Startups"
created-on: "2021-10-11T05:30:00Z"
updated-on: "2021-11-22T05:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
