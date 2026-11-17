---
title: "RSS Feeds at Scale: Advice for Open Source Projects"
created-on: "2023-03-22T22:45:00Z"
updated-on: "2023-05-05T22:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
