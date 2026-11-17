---
title: "Rethinking Pagination for Nonprofits"
created-on: "2021-03-13T19:15:00Z"
updated-on: "2021-05-10T19:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

pagination sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
