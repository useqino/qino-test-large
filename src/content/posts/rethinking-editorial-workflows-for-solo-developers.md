---
title: "Rethinking Editorial Workflows for Solo Developers"
created-on: "2024-08-24T18:15:00Z"
updated-on: "2024-10-16T18:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about editorial workflows. It grew, because every answer raised two more questions.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
