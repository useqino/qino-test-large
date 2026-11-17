---
title: "The Hidden Cost of Link Checking for News Publishers"
created-on: "2026-08-27T21:30:00Z"
updated-on: "2026-10-25T21:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
