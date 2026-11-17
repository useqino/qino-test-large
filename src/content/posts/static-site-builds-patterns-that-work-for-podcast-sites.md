---
title: "Static Site Builds Patterns That Work for Podcast Sites"
created-on: "2022-01-02T13:30:00Z"
updated-on: "2022-01-18T13:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

Most teams only notice static site builds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
