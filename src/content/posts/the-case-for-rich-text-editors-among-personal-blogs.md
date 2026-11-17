---
title: "The Case for Rich Text Editors Among Personal Blogs"
created-on: "2021-12-17T13:45:00Z"
updated-on: "2021-12-18T13:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

If you work with personal blogs, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
