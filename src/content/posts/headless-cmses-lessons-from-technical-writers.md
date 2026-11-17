---
title: "Headless CMSes: Lessons from Technical Writers"
created-on: "2025-04-10T16:00:00Z"
updated-on: "2025-04-20T16:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

If you work with technical writers, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
