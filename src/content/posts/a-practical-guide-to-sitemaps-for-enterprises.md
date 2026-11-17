---
title: "A Practical Guide to Sitemaps for Enterprises"
created-on: "2026-05-30T17:00:00Z"
updated-on: "2026-06-16T17:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
