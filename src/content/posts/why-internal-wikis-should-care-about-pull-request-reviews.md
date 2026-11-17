---
title: "Why Internal Wikis Should Care About Pull Request Reviews"
created-on: "2022-04-29T23:15:00Z"
updated-on: "2022-06-13T23:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
