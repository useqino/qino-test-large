---
title: "Pull Request Reviews Without the Hype, for Enterprises"
created-on: "2024-03-08T22:30:00Z"
updated-on: "2024-04-14T22:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about pull request reviews. It grew, because every answer raised two more questions.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
