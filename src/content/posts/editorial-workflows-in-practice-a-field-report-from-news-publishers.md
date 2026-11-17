---
title: "Editorial Workflows in Practice: A Field Report from News Publishers"
created-on: "2024-10-23T10:30:00Z"
updated-on: "2024-11-05T10:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

We rebuilt our approach to editorial workflows three times last year. Here is what survived.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
