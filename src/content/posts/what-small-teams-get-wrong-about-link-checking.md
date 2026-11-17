---
title: "What Small Teams Get Wrong About Link Checking"
created-on: "2025-12-06T09:45:00Z"
updated-on: "2025-12-25T09:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about link checking. It grew, because every answer raised two more questions.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
