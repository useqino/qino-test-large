---
title: "The Case for Incremental Builds Among News Publishers"
created-on: "2021-09-17T14:45:00Z"
updated-on: "2021-10-06T14:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

incremental builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
