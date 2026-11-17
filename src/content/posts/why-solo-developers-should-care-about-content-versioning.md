---
title: "Why Solo Developers Should Care About Content Versioning"
created-on: "2022-09-10T04:30:00Z"
updated-on: "2022-09-29T04:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
