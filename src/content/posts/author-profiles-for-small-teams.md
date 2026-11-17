---
title: "Author Profiles for Small Teams"
created-on: "2026-06-03T07:30:00Z"
updated-on: "2026-07-03T07:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
