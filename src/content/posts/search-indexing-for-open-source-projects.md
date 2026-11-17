---
title: "Search Indexing for Open Source Projects"
created-on: "2021-09-06T14:30:00Z"
updated-on: "2021-10-26T14:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with open source projects and that consensus falls apart quickly.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
