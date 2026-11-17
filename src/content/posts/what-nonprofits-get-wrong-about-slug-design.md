---
title: "What Nonprofits Get Wrong About Slug Design"
created-on: "2020-12-29T08:15:00Z"
updated-on: "2021-01-22T08:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/editorial.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
