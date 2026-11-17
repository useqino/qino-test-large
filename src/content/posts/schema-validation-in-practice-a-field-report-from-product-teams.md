---
title: "Schema Validation in Practice: A Field Report from Product Teams"
created-on: "2023-05-10T19:15:00Z"
updated-on: "2023-05-15T19:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

If you work with product teams, you have probably met schema validation in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
