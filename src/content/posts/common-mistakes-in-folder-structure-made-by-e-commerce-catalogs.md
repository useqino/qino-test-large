---
title: "Common Mistakes in Folder Structure Made by E-commerce Catalogs"
created-on: "2021-10-12T05:45:00Z"
updated-on: "2021-12-06T05:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

There is a quiet consensus that folder structure is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
