---
title: "Notes on Folder Structure for Podcast Sites"
created-on: "2026-09-01T13:00:00Z"
updated-on: "2026-09-08T13:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
