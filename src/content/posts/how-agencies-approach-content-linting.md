---
title: "How Agencies Approach Content Linting"
created-on: "2025-01-22T12:00:00Z"
updated-on: "2025-03-10T12:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
