---
title: "Teaching Content Migrations to Large Archives"
created-on: "2022-05-20T07:30:00Z"
updated-on: "2022-05-28T07:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
