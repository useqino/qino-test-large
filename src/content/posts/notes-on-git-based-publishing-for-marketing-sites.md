---
title: "Notes on Git-Based Publishing for Marketing Sites"
created-on: "2023-09-28T06:30:00Z"
updated-on: "2023-10-05T06:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

If you work with marketing sites, you have probably met git-based publishing in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
