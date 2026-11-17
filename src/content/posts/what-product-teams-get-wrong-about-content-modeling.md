---
title: "What Product Teams Get Wrong About Content Modeling"
created-on: "2020-11-26T23:00:00Z"
updated-on: "2020-12-17T23:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

If you work with product teams, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
