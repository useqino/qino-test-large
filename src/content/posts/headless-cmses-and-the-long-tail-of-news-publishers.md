---
title: "Headless CMSes and the Long Tail of News Publishers"
created-on: "2022-10-01T01:15:00Z"
updated-on: "2022-11-22T01:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
