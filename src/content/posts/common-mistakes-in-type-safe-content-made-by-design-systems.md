---
title: "Common Mistakes in Type-Safe Content Made by Design Systems"
created-on: "2024-10-19T15:45:00Z"
updated-on: "2024-11-26T15:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

If you work with design systems, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
