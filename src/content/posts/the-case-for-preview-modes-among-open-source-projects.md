---
title: "The Case for Preview Modes Among Open Source Projects"
created-on: "2026-10-06T12:00:00Z"
updated-on: "2026-11-22T12:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to preview modes three times last year. Here is what survived.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
