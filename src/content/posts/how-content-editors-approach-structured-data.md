---
title: "How Content Editors Approach Structured Data"
created-on: "2025-12-02T01:45:00Z"
updated-on: "2025-12-26T01:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

We rebuilt our approach to structured data three times last year. Here is what survived.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
