---
title: "Rich Text Editors: Lessons from Nonprofits"
created-on: "2022-07-20T09:00:00Z"
updated-on: "2022-08-16T09:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
