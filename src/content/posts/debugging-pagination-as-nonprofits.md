---
title: "Debugging Pagination as Nonprofits"
created-on: "2022-08-22T17:30:00Z"
updated-on: "2022-09-12T17:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
