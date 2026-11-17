---
title: "Incremental Builds Patterns That Work for Large Archives"
created-on: "2025-11-03T10:30:00Z"
updated-on: "2025-12-17T10:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
