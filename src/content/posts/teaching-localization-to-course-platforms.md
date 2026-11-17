---
title: "Teaching Localization to Course Platforms"
created-on: "2023-06-04T11:15:00Z"
updated-on: "2023-07-09T11:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
