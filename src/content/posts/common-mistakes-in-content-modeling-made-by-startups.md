---
title: "Common Mistakes in Content Modeling Made by Startups"
created-on: "2021-07-13T08:15:00Z"
updated-on: "2021-08-28T08:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about content modeling. It grew, because every answer raised two more questions.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
