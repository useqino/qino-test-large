---
title: "Teaching Hot Reloading to Open Source Projects"
created-on: "2023-07-06T21:15:00Z"
updated-on: "2023-08-19T21:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
