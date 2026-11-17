---
title: "Rethinking Draft Handling for E-commerce Catalogs"
created-on: "2022-07-11T12:15:00Z"
updated-on: "2022-08-18T12:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
