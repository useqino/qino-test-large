---
title: "How Agencies Approach Content Relations"
created-on: "2022-07-16T17:00:00Z"
updated-on: "2022-09-09T17:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with agencies, you have probably met content relations in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
