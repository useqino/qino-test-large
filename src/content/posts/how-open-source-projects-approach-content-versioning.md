---
title: "How Open Source Projects Approach Content Versioning"
created-on: "2024-09-27T13:30:00Z"
updated-on: "2024-11-16T13:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to content versioning three times last year. Here is what survived.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
