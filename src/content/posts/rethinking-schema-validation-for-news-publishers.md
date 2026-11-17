---
title: "Rethinking Schema Validation for News Publishers"
created-on: "2021-09-24T08:00:00Z"
updated-on: "2021-10-04T08:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
