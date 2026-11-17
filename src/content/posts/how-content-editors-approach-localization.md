---
title: "How Content Editors Approach Localization"
created-on: "2021-08-15T05:30:00Z"
updated-on: "2021-09-05T05:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
