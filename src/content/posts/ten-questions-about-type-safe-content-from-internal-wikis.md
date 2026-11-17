---
title: "Ten Questions About Type-Safe Content from Internal Wikis"
created-on: "2020-11-06T01:30:00Z"
updated-on: "2020-12-07T01:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that type-safe content is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
