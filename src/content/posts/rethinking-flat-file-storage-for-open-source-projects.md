---
title: "Rethinking Flat-File Storage for Open Source Projects"
created-on: "2022-05-24T00:30:00Z"
updated-on: "2022-06-03T00:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
