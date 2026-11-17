---
title: "Teaching Pull Request Reviews to Course Platforms"
created-on: "2026-04-03T04:45:00Z"
updated-on: "2026-04-15T04:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
