---
title: "Pull Request Reviews for Open Source Projects"
created-on: "2021-05-28T12:15:00Z"
updated-on: "2021-06-18T12:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
