---
title: "Content Versioning Without the Hype, for Nonprofits"
created-on: "2026-02-19T20:15:00Z"
updated-on: "2026-02-23T20:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
