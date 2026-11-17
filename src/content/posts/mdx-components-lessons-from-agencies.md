---
title: "MDX Components: Lessons from Agencies"
created-on: "2022-10-04T16:45:00Z"
updated-on: "2022-10-06T16:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about mdx components. It grew, because every answer raised two more questions.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
