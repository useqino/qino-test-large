---
title: "Notes on Preview Modes for Documentation Sites"
created-on: "2022-11-19T06:30:00Z"
updated-on: "2022-11-25T06:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

Most teams only notice preview modes once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
