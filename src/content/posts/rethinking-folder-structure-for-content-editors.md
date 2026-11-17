---
title: "Rethinking Folder Structure for Content Editors"
created-on: "2023-11-16T21:00:00Z"
updated-on: "2023-12-13T21:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

Most teams only notice folder structure once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
