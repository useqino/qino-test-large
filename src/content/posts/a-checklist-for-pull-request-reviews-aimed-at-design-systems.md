---
title: "A Checklist for Pull Request Reviews Aimed at Design Systems"
created-on: "2021-12-01T13:15:00Z"
updated-on: "2021-12-04T13:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
