---
title: "Measuring Schema Validation as Product Teams"
created-on: "2024-09-06T07:00:00Z"
updated-on: "2024-09-17T07:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
