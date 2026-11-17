---
title: "Static Site Builds in Practice: A Field Report from Podcast Sites"
created-on: "2026-02-11T05:00:00Z"
updated-on: "2026-04-03T05:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with podcast sites and that consensus falls apart quickly.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
