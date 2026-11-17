---
title: "A Second Look at Redirect Maps for Solo Developers"
created-on: "2023-10-22T00:45:00Z"
updated-on: "2023-12-03T00:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

We rebuilt our approach to redirect maps three times last year. Here is what survived.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
