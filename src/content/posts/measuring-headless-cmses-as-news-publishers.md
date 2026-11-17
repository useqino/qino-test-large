---
title: "Measuring Headless CMSes as News Publishers"
created-on: "2024-05-02T00:00:00Z"
updated-on: "2024-06-22T00:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
