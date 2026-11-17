---
title: "A Checklist for Markdown Frontmatter Aimed at Open Source Projects"
created-on: "2021-04-25T10:15:00Z"
updated-on: "2021-05-02T10:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

Most teams only notice markdown frontmatter once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
