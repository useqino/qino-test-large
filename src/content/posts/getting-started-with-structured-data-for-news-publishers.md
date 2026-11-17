---
title: "Getting Started with Structured Data for News Publishers"
created-on: "2021-08-10T23:15:00Z"
updated-on: "2021-09-03T23:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

We rebuilt our approach to structured data three times last year. Here is what survived.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
