---
title: "Sitemaps for Internal Wikis"
created-on: "2021-09-08T00:00:00Z"
updated-on: "2021-09-21T00:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

Most teams only notice sitemaps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
