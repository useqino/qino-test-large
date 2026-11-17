---
title: "Getting Started with MDX Components for Open Source Projects"
created-on: "2024-04-10T07:15:00Z"
updated-on: "2024-05-08T07:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

If you work with open source projects, you have probably met mdx components in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
