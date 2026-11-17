---
title: "Measuring Slug Design as News Publishers"
created-on: "2023-01-12T13:15:00Z"
updated-on: "2023-02-26T13:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to slug design three times last year. Here is what survived.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
