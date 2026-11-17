---
title: "Alt Text in Practice: A Field Report from Product Teams"
created-on: "2024-05-29T12:15:00Z"
updated-on: "2024-06-19T12:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

If you work with product teams, you have probably met alt text in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
