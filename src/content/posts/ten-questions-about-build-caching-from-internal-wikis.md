---
title: "Ten Questions About Build Caching from Internal Wikis"
created-on: "2021-10-02T23:00:00Z"
updated-on: "2021-11-30T23:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

build caching sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
