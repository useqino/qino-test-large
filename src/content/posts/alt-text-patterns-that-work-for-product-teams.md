---
title: "Alt Text Patterns That Work for Product Teams"
created-on: "2023-09-04T08:15:00Z"
updated-on: "2023-09-09T08:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

alt text sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
