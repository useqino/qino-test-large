---
title: "The Case for Pagination Among Nonprofits"
created-on: "2021-04-28T00:15:00Z"
updated-on: "2021-04-29T00:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about pagination. It grew, because every answer raised two more questions.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
