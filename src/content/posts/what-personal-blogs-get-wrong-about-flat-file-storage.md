---
title: "What Personal Blogs Get Wrong About Flat-File Storage"
created-on: "2023-02-26T14:45:00Z"
updated-on: "2023-03-17T14:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that flat-file storage is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
