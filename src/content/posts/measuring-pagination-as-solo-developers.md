---
title: "Measuring Pagination as Solo Developers"
created-on: "2022-07-26T17:00:00Z"
updated-on: "2022-09-07T17:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
