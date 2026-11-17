---
title: "Taxonomies: Lessons from Technical Writers"
created-on: "2026-01-07T19:45:00Z"
updated-on: "2026-02-24T19:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with technical writers and that consensus falls apart quickly.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
