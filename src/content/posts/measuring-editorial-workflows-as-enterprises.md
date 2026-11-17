---
title: "Measuring Editorial Workflows as Enterprises"
created-on: "2022-02-07T13:30:00Z"
updated-on: "2022-04-07T13:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

If you work with enterprises, you have probably met editorial workflows in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
