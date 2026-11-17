---
title: "What Technical Writers Get Wrong About Pull Request Reviews"
created-on: "2025-11-04T10:00:00Z"
updated-on: "2025-11-15T10:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
