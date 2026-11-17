---
title: "Flat-File Storage Without the Hype, for Enterprises"
created-on: "2024-07-02T01:45:00Z"
updated-on: "2024-08-18T01:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
