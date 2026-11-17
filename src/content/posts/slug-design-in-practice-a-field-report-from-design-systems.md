---
title: "Slug Design in Practice: A Field Report from Design Systems"
created-on: "2022-12-27T03:15:00Z"
updated-on: "2023-02-04T03:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

We rebuilt our approach to slug design three times last year. Here is what survived.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
