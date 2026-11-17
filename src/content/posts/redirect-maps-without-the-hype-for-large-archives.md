---
title: "Redirect Maps Without the Hype, for Large Archives"
created-on: "2023-04-13T19:00:00Z"
updated-on: "2023-05-13T19:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
