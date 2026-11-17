---
title: "Small Wins in Media Management for Open Source Projects"
created-on: "2021-08-03T23:30:00Z"
updated-on: "2021-09-02T23:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

Most teams only notice media management once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
