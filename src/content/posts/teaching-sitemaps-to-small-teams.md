---
title: "Teaching Sitemaps to Small Teams"
created-on: "2022-04-18T06:45:00Z"
updated-on: "2022-06-04T06:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
