---
title: "Ten Questions About Markdown Frontmatter from Marketing Sites"
created-on: "2024-05-03T01:15:00Z"
updated-on: "2024-06-20T01:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
