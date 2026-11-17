---
title: "Debugging Rich Text Editors as Product Teams"
created-on: "2026-08-29T22:30:00Z"
updated-on: "2026-09-23T22:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

If you work with product teams, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
