---
title: "Measuring Sitemaps as Documentation Sites"
created-on: "2022-02-01T23:15:00Z"
updated-on: "2022-03-13T23:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
