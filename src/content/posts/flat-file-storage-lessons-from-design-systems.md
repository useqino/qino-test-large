---
title: "Flat-File Storage: Lessons from Design Systems"
created-on: "2024-10-23T17:30:00Z"
updated-on: "2024-11-07T17:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
