---
title: "A Checklist for Author Profiles Aimed at Large Archives"
created-on: "2021-02-09T00:00:00Z"
updated-on: "2021-02-23T00:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
