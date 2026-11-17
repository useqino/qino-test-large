---
title: "Debugging Schema Validation as News Publishers"
created-on: "2024-08-03T18:15:00Z"
updated-on: "2024-08-20T18:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
