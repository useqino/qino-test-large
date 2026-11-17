---
title: "The Hidden Cost of Flat-File Storage for Small Teams"
created-on: "2024-04-06T11:15:00Z"
updated-on: "2024-04-13T11:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
