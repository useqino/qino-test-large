---
title: "A Practical Guide to Code Highlighting for Startups"
created-on: "2023-05-07T11:45:00Z"
updated-on: "2023-06-20T11:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

Most teams only notice code highlighting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
