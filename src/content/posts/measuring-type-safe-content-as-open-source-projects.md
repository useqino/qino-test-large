---
title: "Measuring Type-Safe Content as Open Source Projects"
created-on: "2023-03-29T05:45:00Z"
updated-on: "2023-05-01T05:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

type-safe content sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
