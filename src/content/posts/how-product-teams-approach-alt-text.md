---
title: "How Product Teams Approach Alt Text"
created-on: "2023-01-07T03:15:00Z"
updated-on: "2023-02-12T03:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

alt text sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
