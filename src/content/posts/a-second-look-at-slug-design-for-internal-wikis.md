---
title: "A Second Look at Slug Design for Internal Wikis"
created-on: "2023-04-21T16:15:00Z"
updated-on: "2023-06-15T16:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about slug design. It grew, because every answer raised two more questions.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
