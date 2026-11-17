---
title: "Code Highlighting in Practice: A Field Report from Internal Wikis"
created-on: "2021-06-01T08:15:00Z"
updated-on: "2021-07-17T08:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to code highlighting three times last year. Here is what survived.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
