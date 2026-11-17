---
title: "Measuring Image Pipelines as Marketing Sites"
created-on: "2020-11-13T10:15:00Z"
updated-on: "2020-12-22T10:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
