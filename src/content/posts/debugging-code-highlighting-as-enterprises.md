---
title: "Debugging Code Highlighting as Enterprises"
created-on: "2025-03-12T12:45:00Z"
updated-on: "2025-04-13T12:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
