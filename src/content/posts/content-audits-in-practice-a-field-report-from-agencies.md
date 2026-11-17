---
title: "Content Audits in Practice: A Field Report from Agencies"
created-on: "2021-10-18T03:00:00Z"
updated-on: "2021-12-10T03:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

We rebuilt our approach to content audits three times last year. Here is what survived.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
