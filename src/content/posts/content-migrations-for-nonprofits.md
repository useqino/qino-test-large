---
title: "Content Migrations for Nonprofits"
created-on: "2021-04-30T00:00:00Z"
updated-on: "2021-06-21T00:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
