---
title: "Pagination and the Long Tail of Open Source Projects"
created-on: "2021-11-30T15:00:00Z"
updated-on: "2022-01-18T15:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with open source projects, you have probably met pagination in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
