---
title: "Common Mistakes in Sitemaps Made by Content Editors"
created-on: "2021-03-22T21:45:00Z"
updated-on: "2021-05-12T21:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
