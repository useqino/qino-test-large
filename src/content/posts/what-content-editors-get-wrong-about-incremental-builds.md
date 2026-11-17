---
title: "What Content Editors Get Wrong About Incremental Builds"
created-on: "2022-02-23T06:45:00Z"
updated-on: "2022-04-11T06:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
