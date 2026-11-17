---
title: "Draft Handling and the Long Tail of Agencies"
created-on: "2022-04-10T09:30:00Z"
updated-on: "2022-05-12T09:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
