---
title: "Static Site Builds in Practice: A Field Report from Marketing Sites"
created-on: "2024-04-02T03:45:00Z"
updated-on: "2024-05-24T03:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
