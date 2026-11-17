---
title: "Folder Structure: Lessons from Agencies"
created-on: "2022-05-30T17:30:00Z"
updated-on: "2022-06-23T17:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with agencies and that consensus falls apart quickly.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
