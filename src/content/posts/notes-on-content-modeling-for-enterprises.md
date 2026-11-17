---
title: "Notes on Content Modeling for Enterprises"
created-on: "2021-05-09T20:00:00Z"
updated-on: "2021-05-27T20:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

If you work with enterprises, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
