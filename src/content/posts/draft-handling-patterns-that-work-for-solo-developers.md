---
title: "Draft Handling Patterns That Work for Solo Developers"
created-on: "2021-01-16T00:30:00Z"
updated-on: "2021-01-21T00:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

If you work with solo developers, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
