---
title: "The Hidden Cost of Content Audits for Documentation Sites"
created-on: "2023-11-15T17:45:00Z"
updated-on: "2023-12-04T17:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

There is a quiet consensus that content audits is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
