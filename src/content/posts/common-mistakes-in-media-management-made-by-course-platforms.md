---
title: "Common Mistakes in Media Management Made by Course Platforms"
created-on: "2026-07-12T03:30:00Z"
updated-on: "2026-08-28T03:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that media management is solved. Spend a week with course platforms and that consensus falls apart quickly.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
