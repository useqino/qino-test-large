---
title: "Markdown Frontmatter in Practice: A Field Report from Design Systems"
created-on: "2023-05-04T14:45:00Z"
updated-on: "2023-06-09T14:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about markdown frontmatter. It grew, because every answer raised two more questions.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
