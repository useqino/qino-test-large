---
title: "Schema Validation for Startups"
created-on: "2023-02-27T01:00:00Z"
updated-on: "2023-03-04T01:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

If you work with startups, you have probably met schema validation in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
