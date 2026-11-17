---
title: "What News Publishers Get Wrong About Alt Text"
created-on: "2022-05-01T08:00:00Z"
updated-on: "2022-06-08T08:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about alt text. It grew, because every answer raised two more questions.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
