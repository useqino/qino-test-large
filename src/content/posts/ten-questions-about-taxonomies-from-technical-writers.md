---
title: "Ten Questions About Taxonomies from Technical Writers"
created-on: "2023-04-11T08:45:00Z"
updated-on: "2023-05-21T08:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
