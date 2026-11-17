---
title: "Content Relations in Practice: A Field Report from Open Source Projects"
created-on: "2022-03-01T22:00:00Z"
updated-on: "2022-04-24T22:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about content relations. It grew, because every answer raised two more questions.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
