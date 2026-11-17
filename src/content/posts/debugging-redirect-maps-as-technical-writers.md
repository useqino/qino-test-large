---
title: "Debugging Redirect Maps as Technical Writers"
created-on: "2024-03-01T22:15:00Z"
updated-on: "2024-03-20T22:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

If you work with technical writers, you have probably met redirect maps in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
