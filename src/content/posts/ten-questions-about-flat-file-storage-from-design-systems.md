---
title: "Ten Questions About Flat-File Storage from Design Systems"
created-on: "2025-04-11T08:00:00Z"
updated-on: "2025-04-29T08:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
