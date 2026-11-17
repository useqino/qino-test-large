---
title: "How News Publishers Approach Open Graph Tags"
created-on: "2022-06-17T19:30:00Z"
updated-on: "2022-06-18T19:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

If you work with news publishers, you have probably met open graph tags in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
