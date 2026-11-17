---
title: "Ten Questions About Content Versioning from Small Teams"
created-on: "2026-02-18T14:30:00Z"
updated-on: "2026-03-28T14:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

We rebuilt our approach to content versioning three times last year. Here is what survived.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
