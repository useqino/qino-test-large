---
title: "Headless CMSes Patterns That Work for Personal Blogs"
created-on: "2025-10-12T03:45:00Z"
updated-on: "2025-11-22T03:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
