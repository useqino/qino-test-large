---
title: "The Hidden Cost of Hot Reloading for Small Teams"
created-on: "2021-01-28T22:30:00Z"
updated-on: "2021-03-24T22:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
