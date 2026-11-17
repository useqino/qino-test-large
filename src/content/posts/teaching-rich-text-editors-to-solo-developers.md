---
title: "Teaching Rich Text Editors to Solo Developers"
created-on: "2023-12-12T22:30:00Z"
updated-on: "2023-12-31T22:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

If you work with solo developers, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
