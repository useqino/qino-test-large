---
title: "Author Profiles for Product Teams"
created-on: "2022-04-12T13:00:00Z"
updated-on: "2022-05-06T13:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

Most teams only notice author profiles once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
