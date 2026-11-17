---
title: "Ten Questions About Static Site Builds from Open Source Projects"
created-on: "2021-04-24T22:45:00Z"
updated-on: "2021-05-21T22:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/seo.json"
---

We rebuilt our approach to static site builds three times last year. Here is what survived.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
