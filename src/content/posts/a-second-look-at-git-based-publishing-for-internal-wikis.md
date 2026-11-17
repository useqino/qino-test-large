---
title: "A Second Look at Git-Based Publishing for Internal Wikis"
created-on: "2023-08-01T13:30:00Z"
updated-on: "2023-09-24T13:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
