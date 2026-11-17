---
title: "A Second Look at Sitemaps for E-commerce Catalogs"
created-on: "2023-10-17T12:45:00Z"
updated-on: "2023-12-02T12:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
