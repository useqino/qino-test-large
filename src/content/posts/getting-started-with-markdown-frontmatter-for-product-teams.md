---
title: "Getting Started with Markdown Frontmatter for Product Teams"
created-on: "2022-05-19T09:15:00Z"
updated-on: "2022-05-23T09:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

If you work with product teams, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
