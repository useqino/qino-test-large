---
title: "Notes on Content Linting for Enterprises"
created-on: "2024-03-10T17:45:00Z"
updated-on: "2024-03-24T17:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

If you work with enterprises, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
