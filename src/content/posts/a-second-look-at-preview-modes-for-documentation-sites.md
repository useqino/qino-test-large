---
title: "A Second Look at Preview Modes for Documentation Sites"
created-on: "2021-09-09T22:15:00Z"
updated-on: "2021-10-13T22:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

preview modes sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
