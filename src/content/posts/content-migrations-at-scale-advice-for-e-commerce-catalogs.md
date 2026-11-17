---
title: "Content Migrations at Scale: Advice for E-commerce Catalogs"
created-on: "2021-04-04T12:45:00Z"
updated-on: "2021-05-13T12:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
