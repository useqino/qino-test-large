---
title: "Draft Handling and the Long Tail of Internal Wikis"
created-on: "2025-05-28T21:00:00Z"
updated-on: "2025-05-28T21:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
