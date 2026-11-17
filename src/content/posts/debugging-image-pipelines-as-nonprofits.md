---
title: "Debugging Image Pipelines as Nonprofits"
created-on: "2023-05-03T17:45:00Z"
updated-on: "2023-06-23T17:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
